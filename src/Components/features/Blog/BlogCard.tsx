import { Link2Icon } from "lucide-react";
import type { post } from "../../../types/post";
import { formatDate } from "@/utils/formatDate";
import { relativeDate } from "@/utils/relativeDate";
import { DefaultButton } from "@/Components/ui/DefaultButton";

export function BlogCard({ title, description, slug, banner, postedAt }: post) {
    return (
        <div className="border rounded p-2 m-2 max-w-sm sm:max-w-md md:max-w-lg">
            <img className="rounded w-full h-48 object-cover" src={banner} alt={title} />
            <h2 className="text-2xl font-bold mt-2">{title}</h2>
            <p className="text-xs text-gray-500">{formatDate(postedAt, "dd/MM/yyyy 'às' HH:mm")} ({relativeDate(postedAt)})</p>
            <p className="break-words text-sm text-gray-300 line-clamp-3 mt-1">
                {description}
            </p>
            <DefaultButton wfull={true} border icon={<Link2Icon />} link={slug}>Ler post</DefaultButton>
        </div>
    );
}
