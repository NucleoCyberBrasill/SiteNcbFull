import { Link2Icon } from "lucide-react";
import type {post} from '../../../types/post'

export function BlogCard({title, description, slug, banner}: post) {
    return (
        <div className="border p-2 rounded max-w-xl m-2">
                <img className="rounded" src={banner} alt="" />
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="break-words">{description}</p>
                <a href={slug}><button className="flex gap-2">Ler post <Link2Icon /></button></a>
            </div>
    )
}