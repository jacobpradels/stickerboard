import type { Actions } from "./$types";
import { pubs } from "$lib/db.js";
import { redirect } from '@sveltejs/kit';

export function load() {
    throw redirect(302,'/');
}
export const actions = {
    default: async ({cookies, request}) => {
        // event stuff
        const data = await request.formData();
        pubs.insertOne({content: data.get('content')});
    }
} satisfies Actions