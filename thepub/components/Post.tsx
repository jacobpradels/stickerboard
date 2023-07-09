import Image from 'next/image'
import Link from 'next/link'
interface User {
  id: string;
  name: string | null;
  bio: string | null;
  age: number | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
}

interface Props {
    content: string;
    createdAt: Date;
    user: User;
}

export default function Post({content, createdAt, user} : Props) {
  return (
    <div className="flex shadow-lg rounded-md max-w-md mx-auto px-3 py-2 bg-gray-200">
      <Image
      src={user.image ?? '/vercel.svg'}
      width={40}
      height={40}
      alt="Your Name"
      className="flex-shrink-0 w-10 h-10 rounded-md shadow-md"/>
        
      <div className="flex flex-col pl-3">
        <h2>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </h2>
        <p className="text-gray-600">
          {content}
        </p>
        <p className="text-gray-400">
          {createdAt.getDate()}/{createdAt.getMonth()}/{createdAt.getFullYear()} {createdAt.toLocaleTimeString()}
        </p>
      </div>
    </div>
  )
}
