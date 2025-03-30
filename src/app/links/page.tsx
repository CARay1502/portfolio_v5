import Link from 'next/link';
import BuyMeACoffee from '../components/BuyMeACoffee';

export default function MyLinks() {
    return (
        <main className="container m-auto p-auto text-white">
            <section >
                <div className="h-screen bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500">
                    <div className="min-h-screen flex flex-col p-4 pt-12 gap-2 items-center text-center ">
                    <div className="indicator">
                        <span className="indicator-item indicator-bottom indicator-center badge badge-secondary">@chris.is.coding</span>
                        <div className="avatar">
                            <div className="w-32 rounded-full">
                                <img src="/profile_pic.jpg" />
                            </div>
                        </div>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-bold mt-4">Christian Ray</h1>
                        <p className="text-l sm:py-6">Check out my other stuff below :)</p>
                    <ul className="flex flex-col pt-8 gap-4 rounded-box w-full lg:max-w-96">
                        <BuyMeACoffee />
                        <li><Link href='https://www.youtube.com/@chris.is.coding.mp4' className="btn btn-block btn-outline text-xl">YouTube</Link></li>
                        <li><Link href='https://www.tiktok.com/@chris.is.coding' className="btn btn-block btn-outline text-lg">TikTok</Link></li>
                        <li><Link href='https://www.instagram.com/chris.is.coding/' className="btn btn-block btn-outline text-lg">Instagram</Link></li>
                        <li><Link href='https://github.com/CARay1502' className="btn btn-block btn-outline text-lg">Github</Link></li>
                        <li><Link href='/' className="btn btn-block btn-neutral text-lg hover:btn-accent">My Website</Link></li>
                        
                    </ul>
                    </div>
                    
                </div>
            </section>
        </main>
    );
}