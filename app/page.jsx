import Link from "next/link";

export default function Page() {
    return (
        <main className="flex flex-col">
           <h1 className='title'>Don Verduyn</h1>
           <span className='subtitle'>FRONTEND ARCHITECT</span>
           <section>
            <Link href='https://linkedin.com/in/donverduyn' className='text'>linkedin.com/in/donverduyn/</Link>
            <Link href='https://github.com/donverduyn/' className='text'>github.com/donverduyn/</Link>
            <span className="text">discord: donverduyn</span>
           </section>
         
        </main>
    );
}