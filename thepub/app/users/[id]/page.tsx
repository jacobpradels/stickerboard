import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import FollowButton from '@/components/FollowButton/FollowButton'
import Post from '@/components/Post'
interface Props {
    params: {id: string};
}


export default async function UserPage({ params }: Props) {
    const user = await prisma.user.findUnique({where : {id : params.id}});
    const posts = await prisma.post.findMany({where : {authorId : params.id}});
    const follower_count = await prisma.follows.count({where : {followingId : params.id}});
    if (!user) {
        return <div>404</div>
    }
    return (
        <main>
            <div className="flex shadow-lg max-w-2xl mx-auto mt-3">
                <div className="flex flex-col">
                    <div className="rounded-md bg-gray-200">
                        <Image
                        src={user?.image ?? '/vercel.svg'}
                        width={128}
                        height={128}
                        alt="Your Name"
                        className="rounded-md p-1"/>
                    </div>
                    {user.name}
                    <p>{follower_count} followers</p>
                    <FollowButton targetUserId={user.id} />
                </div>
                <p className="mx-auto my-auto">{user.bio}</p>
            </div>
            {posts.map(async (post) => {
                const user = await prisma.user.findUnique({where : {id : post.authorId}});
                return (
                    <div key={post.id}>
                        <Post content={post.content} createdAt={post.createdAt} user={user}/>
                    </div>
                );
            })}
        </main>
    )
}