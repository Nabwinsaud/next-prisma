import AddTodo from "@/components/AddTodo";
import Link from "next/link";
// import { useRouter } from "next/router"; // for server componenets
// import { useRouter } from "next/navigation"; // for client components

export default async function Home() {
  return (
    <main className="h-screen flex  flex-col justify-center items-center w-full max-w-7xl mx-auto">
      <h1 className="text-center font-bold capitalize text-3xl py-6 shadow-sm">
        Lets build crud in prisma with nextjs
      </h1>
      <div className="flex w-full space-x-4">
        <div className="flex my-2 w-full justify-center flex-col items-center">
          <Link
            href={"/todos"}
            // className="rounded-md w-[200px] mx-auto text-center py-1 px-4 text-black bg-white "
            className="text-white border border-white  bg-black rounded-md py-1 px-6 "
          >
            Take me to todos
          </Link>
        </div>
      </div>
      <AddTodo />
    </main>
  );
}
