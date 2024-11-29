import Link from "next/link";

export default function Page() {
    return (
        <main className="flex flex-col">
           <h1 className='title'>Verduijn D.</h1>
           <span className='subtitle'>FRONTEND DEVELOPER</span>
           <section>
            <Link href='https://linkedin.com/in/donnyverduijn' className='text'>linkedin.com/in/donnyverduijn</Link>
            <Link href='https://github.com/donnyVerduijn/' className='text'>github.com/donnyVerduijn/</Link>
            <span className="text">discord: donny_verduijn</span>
           </section>
         
        </main>
    );
}