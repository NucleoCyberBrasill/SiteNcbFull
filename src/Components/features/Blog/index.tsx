import { BlogCard } from "./BlogCard";
import posts from './posts.json'
import type { post } from '../../../types/post'

export function BlogContent() {
    return (
 <section className="justify-center items-center grid md:grid-cols-2 m-2 lg:grid-cols-3">
            {posts.map((p: post) => (
                <BlogCard title={p.title} key={p.slug} description={p.description} slug={p.slug} banner={p.banner} postedAt={p.postedAt} />
            ))}
        </section>
    )
}