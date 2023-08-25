import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div className="p-4">
    <p className="text-6xl text-green-600">Dashboard Page (Protected)</p>
   <UserButton afterSignOutUrl='/' />
    </div>
    
  )
}
