# Data-Fatching-in-Next-Js

I explored different data fetching techniques, including SSR (Server-Side Rendering), SSG (Static Site Generation), and ISR (Incremental Static Regeneration). 

# (i) SSR (Server-Side Rendering):-
 In SSR, data is fetched at request time on the server for every page request. This ensures up-to-date content but can slightly increase load time. I used getServerSideProps() to implement SSR in my Next.js projects.

# (ii)  SSG (Static Site Generation):-
 SSG pre-renders pages at build time, making them super fast. This method is ideal for pages with static data that don’t change frequently. I used getStaticProps() to generate static pages for better performance.

# (iii)  ISR (Incremental Static Regeneration):-
 ISR combines the benefits of SSG and SSR. It allows static pages to be updated without rebuilding the entire app, improving efficiency. By using revalidate inside getStaticProps(), I enabled automatic content updates.

Next.js provides powerful data-fetching strategies to optimize performance and user experience.
I improved my ability to build high-performance, SEO-friendly web applications with Next.js. 🚀