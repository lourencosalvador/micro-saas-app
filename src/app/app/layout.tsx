import { auth } from "@/server/auth"
import { MainSideBar } from "./_components/main-sidebar"


export default async function Layout({ children }: { children: React.ReactNode }) {
    const session = await auth()
    
    return (
        <div className="grid grid-cols-[16rem_1fr]">
            <MainSideBar  user={session?.user} />
            <main>
                {children}
            </main>
        </div>
    )
}