'use client';

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";


export function PostForm({user}: any) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [isFetching, setIsFetching] = useState(false);
    const isMutating = isFetching || isPending;
    const submitPost = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsFetching(true);
        const formData = new FormData(e.currentTarget);

        const body = {
            content: formData.get('content'),
            authorId: user?.id,
            published: true,
            updatedAt: new Date(),
        };
        e.currentTarget.reset();
        const res = await fetch('/api/post', {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        setIsFetching(false);
        startTransition(() => {
            router.refresh();
        })
        await res.json();
    };
    return (
        <div className="mx-auto max-w-md">
            <form onSubmit={submitPost} className="flex">
                <textarea 
                    name="content" 
                    placeholder={`What's on your mind?`}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-none rounded-tl rounded-bl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                <button type="submit" className="w-16 h-16 rounded-tr rounded-br bg-gray-100 border broder-gray-300 hover:bg-gray-400">Post</button>
            </form>
        </div>
    )
}