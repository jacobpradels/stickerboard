import db from "$lib/db.js";
import { pubs } from "$lib/db.js";
import type { PageServerLoad } from "./$types";

// Get all the cars from database
export const load: PageServerLoad = async function() {
    const data = await pubs.find({}, {limit: 50, projection: {
        _id: 0,
    }}).toArray();
    return { pubs: data };
}