import Image from 'next/image';
import Link from 'next/link';

interface Props {
    id: string;
    name: string;
    image: string;
    bio: string;
}

export default function UserCard({id, name, image, bio} : Props) {
    return (
        <div>
            <Image src={image} width={128} height={128} alt="Your Name"/>
            <Link href={`/users/${id}/`}>
                <h1>{name}</h1>
            </Link>
            <p>{bio}</p>
        </div>
    )
}