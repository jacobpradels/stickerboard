import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import UserCard from '@/components/UserCard'

export default async function Users() {
    const users = await prisma.user.findMany();
    console.log(users);
    return (
        <main>
            <h1>Users</h1>
            <div>
                {users.map(
                    (user) => {
                    return <UserCard id={user.id} name={user.name ?? ''} image={user.image ?? ''} bio={user.bio ?? ''}/>
                }
                )}
            </div>
        </main>
    )
}