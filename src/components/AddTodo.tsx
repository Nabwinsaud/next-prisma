"use client";
// use  client is done because i am using next 13
// why to  use "use clinet" ?
// by default nextjs 13 components are server componenets
// if we want to run client componenets we need to use use-client
//
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/navigation";
interface ITodo {
  title: string;
  description: string;
}
export default function AddTodo() {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const navigate = () => router.push("/todos");
  const notify = () => toast.success("Todo added successfully.");
  const errorMessage = () => toast.error("Could not create Todo.");
  const [todo, setTodo] = useState<ITodo>({ title: "", description: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTodo((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/todo", {
        method: "POST",
        body: JSON.stringify(todo),
      });
      setLoading(false);
      if (response.status === 200) {
        notify();
        navigate();
      }
    } catch (error: any) {
      // errorMessage();
      toast.error("could not create Todo");
    }
  };
  return (
    <div className="flex flex-col">
      <Toaster />
      <div className="my-2">
        <button
          className="text-black bg-white rounded-md py-1 px-6"
          onClick={() => setOpen(true)}
        >
          create Todo
        </button>
      </div>
      <Dialog
        className="relative z-50"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="flex fixed inset-0 p-4 flex-col text-black items-center justify-center">
          <Dialog.Panel className="w-full max-w-md mx-auto bg-white rounded-md py-6 px-6 flex flex-col">
            <Dialog.Title className="flex border-b justify-between items-center my-2">
              <p className="font-bold">Add TodoList ? </p>
              <span
                onClick={() => setOpen(false)}
                className="flex hover:cursor-pointer text-xl items-center"
              >
                <AiOutlineClose />
              </span>
            </Dialog.Title>
            <Dialog.Description as="div" className="py-2">
              <form className="flex  flex-col py-2" onSubmit={handleSubmit}>
                <input
                  className="rounded-md my-2"
                  type="text"
                  name="title"
                  placeholder="title"
                  onChange={handleChange}
                  required
                />
                <textarea
                  className="rounded-md my-2"
                  //   type="text"
                  name="description"
                  placeholder="description"
                  onChange={handleChange}
                  required
                />
                <button
                  disabled={loading}
                  className="bg-slate-300 my-2 hover:bg-slate-400 transition-all duration-200 py-2 rounded-md text-black"
                  type="submit"
                >
                  {loading ? "creating Todo..." : "Create Todo"}
                </button>
              </form>
            </Dialog.Description>
            {/* This will permanently deactivate your account */}
            {/* <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </p> */}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
