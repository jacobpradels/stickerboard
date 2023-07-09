import Image from 'next/image'
import {getServerSession} from 'next-auth'
export default async function Home() {
  const session = await getServerSession();
  const name = session?.user?.name ?? 'Guest';
  if (session) {
    return (
      <main>
        Welcome {name}!
        <Image
        src={session.user?.image ?? '/vercel.svg'}
        width={128}
        height={128}
        alt="Your Name"/>
      </main>
    )
  }
  return (
    <main>
      Welcome {name}!
    </main>
  )
}
