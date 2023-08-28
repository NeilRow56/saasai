import Navbar from '@/components/Navbar'

import Sidebar from '@/components/Sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className=" h-full relative ">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-blue-800 md:w-72">
        <Sidebar />
      </div>
      <main className="md:pl-72 bg-green-100 h-full ">
        <Navbar />
        {children}
        
      </main>
    </div>
  )
}
