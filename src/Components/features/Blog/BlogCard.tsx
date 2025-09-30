import { Link2Icon } from "lucide-react";
import type { post } from "../../../types/post";
import { formatDate } from "@/utils/formatDate";

export function BlogCard({ title, description, slug, banner, postedAt }: post) {
  return (
    <div className="border rounded p-2 m-2 max-w-sm sm:max-w-md md:max-w-lg">
      <img className="rounded w-full h-48 object-cover" src={banner} alt={title} />
      <h2 className="text-2xl font-bold mt-2">{title}</h2>
      <p className="text-xs text-gray-500">{formatDate(postedAt, "dd/MM/yyyy 'às' HH:mm")}</p>
      <p className="break-words text-sm text-gray-300 line-clamp-3 mt-1">
        {description}
      </p>
      <a
        href={slug}
        className="flex gap-2 items-center mt-3 text-blue-400 hover:text-blue-300 transition-colors"
      >
        Ler post <Link2Icon className="w-4 h-4" />
      </a>
    </div>
  );
}
