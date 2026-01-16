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

-- =====================================================
-- VOLUNTEERS TABLE SETUP
-- =====================================================

-- Create the volunteers table
CREATE TABLE IF NOT EXISTS volunteers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  team VARCHAR(100) NOT NULL,
  purpose_statement TEXT NOT NULL,
  resume_url TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  reviewed_at TIMESTAMP WITH TIME ZONE,
  reviewed_by UUID,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster email lookups
CREATE INDEX IF NOT EXISTS idx_volunteers_email ON volunteers(email);

-- Create index for team filtering
CREATE INDEX IF NOT EXISTS idx_volunteers_team ON volunteers(team);

-- Create index for status filtering
CREATE INDEX IF NOT EXISTS idx_volunteers_status ON volunteers(status);

-- Enable Row Level Security (RLS)
ALTER TABLE volunteers ENABLE ROW LEVEL SECURITY;

-- Policy to allow inserts from anonymous users (for volunteer signup)
CREATE POLICY "Allow anonymous volunteer inserts" ON volunteers
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy to allow select for authenticated users (admin)
CREATE POLICY "Allow authenticated select on volunteers" ON volunteers
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy to allow updates for authenticated users (admin)
CREATE POLICY "Allow authenticated updates on volunteers" ON volunteers
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create trigger for updated_at on volunteers
DROP TRIGGER IF EXISTS update_volunteers_updated_at ON volunteers;
CREATE TRIGGER update_volunteers_updated_at
  BEFORE UPDATE ON volunteers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- STORAGE BUCKET FOR RESUMES
-- =====================================================

-- Note: Run this in Supabase Dashboard > Storage > Create new bucket
-- Bucket name: resumes
-- Public bucket: false (or true if you want public access)

-- If using SQL (requires supabase_admin role):
-- INSERT INTO storage.buckets (id, name, public) 
-- VALUES ('resumes', 'resumes', false)
-- ON CONFLICT (id) DO NOTHING;

-- Storage policies for resumes bucket (run in SQL editor):
-- Allow anonymous uploads
-- CREATE POLICY "Allow anonymous uploads to resumes" ON storage.objects
--   FOR INSERT
--   TO anon
--   WITH CHECK (bucket_id = 'resumes');

-- Allow authenticated users to read
-- CREATE POLICY "Allow authenticated reads from resumes" ON storage.objects
--   FOR SELECT
--   TO authenticated
--   USING (bucket_id = 'resumes');
