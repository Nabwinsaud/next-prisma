import { IData } from "@/pages/api/todo";
import Link from "next/link";
import React from "react";
async function getData(): Promise<IData[]> {
  const response = await fetch("http://localhost:3000/api/todo", {
    next: { revalidate: 40 },
  });
  if (!response.ok) {
    throw new Error("failed to fetch data");
  }
  return response.json();
}
export default async function TodoList() {
  const data = await getData();
  return (
    <div className="w-full h-screen max-w-4xl mx-auto">
      <div className="my-6">
        <div className="py-4">
          <Link className="bg-white text-black rounded-md py-2 px-6" href="/">
            Back
          </Link>
        </div>
      </div>
      {data.map((d, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col py-1 justify-center space-y-2">
            <Link
              className="flex border-b rounded-sm my-1 flex-col text-white"
              href={`/todos/${d.id}`}
            >
              {d.title}
            </Link>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
