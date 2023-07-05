import Link from 'next/link';
interface Post {
    title: string;
    content: string;
    slug: string;
}

export default async function BlogPage () {
    const posts = await fetch('http://localhost:3000/api/content').then(
        (res) => res.json()
    )
    return (
        <ul>
            {posts.map((post: Post) => {
                return (
                <li>
                    <Link href={'/blog/' + post.slug}>{post.title}</Link>
                </li>)
            }
            )}
        </ul>
    );
}