export default function ThirdSec() {
    return (
        <div className="first-sec pt-20 xl:pt-24 lg:pt-24 px-4 xl:px-8 lg:px-8 dark:bg-slate-900 dark:text-white flex flex-col gap-24">
            <div className="flex flex-col">
                <h1 className="sec-title text-4xl xl:text-6xl lg:text-6xl mb-5">Our Blog</h1>
                <div className="flex justify-between items-center gap-8">
                    <p className="text-gray-500 xl:text-2xl lg:text-2xl text-lg">An insight the incredible experience in the world.</p>
                </div>
            </div>
            <div className="w-full flex flex-col xl:flex-row lg:flex-row xl:gap-16 lg:gap-16 gap-6 card--list xl:h-[686px] lg:h-[686px]">
                <div className="xl:w-1/2 lg:w-1/2 w-full h-full pb-5 xl:pb-0 lg:pb-0">
                    <img src="/italy.jpg" alt="italy" className="w-full xl:h-[606px] lg:h-[606px] rounded-[26px]"/>
                </div>
                <div className="flex flex-col gap-6 xl:w-1/2 lg:w-1/2 w-full p-0 xl:p-8 lg:p-8">
                    <h1 className="xl:text-5xl lg:text-5xl text-4xl leading-tight">Beautiful Italy <br /> Let’s travel</h1>
                    <p className="text-lg leading-10">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. No one rejects, dislike, or avoids plasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremly painful. Nor again is there anyone who loves or pursues.</p>
                    <a href="#Home" className="text-primary text-2xl">Read More</a>
                </div>
            </div >
        </div>
    )
}