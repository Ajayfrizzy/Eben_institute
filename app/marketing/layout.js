// app/(marketing)/layout.js
export default function MarketingLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {children}
    </div>
  )
}