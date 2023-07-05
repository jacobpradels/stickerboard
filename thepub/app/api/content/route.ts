const posts = [
    {
      title: "Lorem Ipsum 1",
      slug: "lorem-ipsum-1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "Lorem Ipsum 2",
      slug: "lorem-ipsum-2",
      content: "Nulla convallis massa quis convallis pellentesque."
    },
    {
      title: "Lorem Ipsum 3",
      slug: "lorem-ipsum-3",
      content: "Phasellus in nunc nec nibh volutpat dignissim."
    },
    {
      title: "Lorem Ipsum 4",
      slug: "lorem-ipsum-4",
      content: "Donec eu consequat purus, at fringilla mauris."
    },
    {
      title: "Lorem Ipsum 5",
      slug: "lorem-ipsum-5",
      content: "Fusce ultrices metus vel ligula ullamcorper, id tincidunt dui mollis."
    },
    {
      title: "Lorem Ipsum 6",
      slug: "lorem-ipsum-6",
      content: "Sed scelerisque ligula eu orci ultrices, id bibendum sem pellentesque."
    },
    {
      title: "Lorem Ipsum 7",
      slug: "lorem-ipsum-7",
      content: "Morbi efficitur urna vel est dignissim, ut sollicitudin sapien mattis."
    },
    {
      title: "Lorem Ipsum 8",
      slug: "lorem-ipsum-8",
      content: "Vestibulum hendrerit massa et leo interdum, non luctus mi rutrum."
    },
    {
      title: "Lorem Ipsum 9",
      slug: "lorem-ipsum-9",
      content: "Pellentesque convallis elit id sapien venenatis, eget tempus ligula pellentesque."
    },
    {
      title: "Lorem Ipsum 10",
      slug: "lorem-ipsum-10",
      content: "Vivamus accumsan lacus vitae erat cursus, ut vestibulum dolor luctus."
    }
  ];
  
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(posts);
}
  