export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-green-100 h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900 md:w-72">
        <div className="text-slate-200">Hello Sidebar</div>
      </div>
      <main className="md:pl-72">Hello content</main>
    </div>
  )
}
 