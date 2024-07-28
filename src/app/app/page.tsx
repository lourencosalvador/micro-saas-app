import { auth } from "@/server/auth";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";


export default async function Apppage() {
  const session = await auth()
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center gap-4">
      <Avatar className="border border-zinc-800 size-[30px] flex justify-center items-center  rounded-full">
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <span>{session?.user?.email}</span>
    </div>
    </main>
  );
}  