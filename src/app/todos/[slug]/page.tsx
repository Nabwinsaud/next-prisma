import { getTodo } from "../../../utils/getTodo";
import Link from "next/link";
interface ISlug {
  params: { slug: string };
}
export default async function TodoId({ params: { slug } }: ISlug) {
  const user = await getTodo(slug);
  return (
    <div className="w-full h-screen max-w-4xl mx-auto">
      <div className="flex py-4 flex-col  justify-center space-y-2">
        <p className="text-white capitalize">{user?.title}</p>
        <h6 className="text-gray-300">{user?.description}</h6>
        <div className="py-4">
          <Link
            className="bg-white text-black rounded-md py-2 px-6"
            href="/todos"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
