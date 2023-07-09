import { prisma } from '@/lib/prisma'
import Image from 'next/image'
interface Props {
    params: {id: string};
}


export default async function UserPage({ params }: Props) {
    const user = await prisma.user.findUnique({where : {id : params.id}});
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
        </main>
    )
}