-- Supabase SQL to create the waitlist table
-- Run this in the Supabase SQL Editor (https://supabase.com/dashboard/project/YOUR_PROJECT/sql)

-- Create the waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  is_verified BOOLEAN DEFAULT FALSE,
  verified_at TIMESTAMP WITH TIME ZONE,
  verification_token VARCHAR(255),
  token_expires TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster email lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Create index for verification token lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_verification_token ON waitlist(verification_token);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Policy to allow inserts from anonymous users (for waitlist signup)
CREATE POLICY "Allow anonymous inserts" ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy to allow updates from anonymous users (for email verification)
CREATE POLICY "Allow anonymous updates for verification" ON waitlist
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

-- Policy to allow select for anonymous users (to check email exists)
CREATE POLICY "Allow anonymous select" ON waitlist
  FOR SELECT
  TO anon
  USING (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
DROP TRIGGER IF EXISTS update_waitlist_updated_at ON waitlist;
CREATE TRIGGER update_waitlist_updated_at
  BEFORE UPDATE ON waitlist
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
