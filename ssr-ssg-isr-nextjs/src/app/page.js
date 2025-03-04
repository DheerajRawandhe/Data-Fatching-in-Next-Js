// "use client"

import Image from "next/image";

export default async function Home() {
  // console.log("Hello ");

  // const data = await fetch('https://api.vercel.app/blog', {cache : "no-store"})
  
  const data = await fetch('https://api.vercel.app/blog',{ next : { revalidate: 3600}})
  const posts = await data.json()

  return (
   <>
   {/* <p>This  is Home Page</p> */}

   <ul>
      {posts.map((post) => (
        
        <li key={post.id}><br /> Title :- {post.title} 
        <br /> Author :- {post.author}</li>
      ))}
      
    </ul>
   </>
  );
}

export const dynamic = 'force-dynamic'