import Image from 'next/image'
import {getServerSession} from 'next-auth'
import { PostForm } from '@/components/PostForm'
import { prisma } from '@/lib/prisma'
import Post from '@/components/Post'

interface User {
  id: string;
  name: string | null;
  bio: string | null;
  age: number | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
}

export default async function Home() {
  const session = await getServerSession();
  const name = session?.user?.name ?? 'Guest';
  const posts = await prisma.post.findMany();

  if (session) {
    return (
      <main>
        Welcome {name}!
        <Image
        src={session.user?.image ?? '/vercel.svg'}
        width={128}
        height={128}
        alt="Your Name"/>
        <PostForm user={session.user}/>
        {posts.reverse().map(async (post) => {
                const user = await prisma.user.findFirst({where : {id : post.authorId}});
                if (user) {
                  return (
                      <div key={post.id}>
                          <Post content={post.content} createdAt={post.createdAt} user={user}/>
                      </div>
                  );
                }
        })}
      </main>
    )
  }
  return (
    <main>
      Welcome {name}!
    </main>
  )
}
