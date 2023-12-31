
import { UserButton } from "@clerk/nextjs"
import { MobileSidebar } from "./Mobile-Sidebar"




const Navbar = () => {
  return (
    <div className="flex bg-slate-300 items-center p-4">
      <MobileSidebar />
      <div className="w-full flex justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}

export default Navbar
