"use client";
// use  client is done because i am using next 13
// why to  use "use clinet" ?
// by default nextjs 13 components are server componenets
// if we want to run client componenets we need to use use-client
//
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
export default function AddTodo() {
  const [open, setOpen] = useState<boolean>(false);
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className="flex flex-col">
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
            <Dialog.Description className="py-2">
              <form className="flex flex-col py-2" onSubmit={handleSubmit}>
                <input
                  className="rounded-md my-2"
                  type="text"
                  placeholder="title"
                />
                <textarea
                  className="rounded-md my-2"
                  //   type="text"
                  placeholder="description"
                />
                <button
                  className="bg-slate-300 my-2 hover:bg-slate-400 transition-all duration-200 py-2 rounded-md text-black"
                  type="submit"
                >
                  Create Todo
                </button>
              </form>
              {/* This will permanently deactivate your account */}
            </Dialog.Description>
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
