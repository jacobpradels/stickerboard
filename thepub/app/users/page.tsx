import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export default async function Users() {
    const users = await prisma.user.findMany();
    return (
        <main>
            <h1>Users</h1>
            <div>
                {users.map(
                    (user) => {
                    return <Link href={'/users/' + user.id} key={user.id}>{user.name}</Link>
                }
                )}
            </div>
        </main>
    )
}