import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About us',
    description: 'About us page',
};
export default function About() {
    return (
        <main>
            <h1>About</h1>
            <p>This is the about page</p>
        </main>
    )
}