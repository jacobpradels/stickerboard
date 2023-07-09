import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import FollowButton from '@/components/FollowButton/FollowButton'
interface Props {
    params: {id: string};
}


export default async function UserPage({ params }: Props) {
    const user = await prisma.user.findUnique({where : {id : params.id}});
    const follower_count = await prisma.follows.count({where : {followingId : params.id}});
    if (!user) {
        return <div>404</div>
    }
    return (
        <main>
            <h1>User</h1>
            <div>
                {user.name}
                <Image
                src={user?.image ?? '/vercel.svg'}
                width={128}
                height={128}
                alt="Your Name"/>
            </div>
            {/* @ts-expect-error Server Component */}
            <FollowButton targetUserId={user.id}/>
            <p>{user.bio}</p>
            <p>{follower_count} followers</p>
        </main>
    )
}