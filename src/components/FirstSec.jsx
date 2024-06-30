import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";


export default function FirstSec() {
    const [index, setIndex] = useState(0);
    return (
        <div className="first-sec pt-20 xl:pt-24 lg:pt-24 px-4 xl:px-8 lg:px-8 dark:bg-slate-900 dark:text-white flex flex-col gap-24">
            <div className="flex flex-col">
                <h1 className="first-sec-title text-4xl xl:text-6xl lg:text-6xl mb-5">Popular Destinations</h1>
                <div className="flex justify-between items-center gap-8">
                    <p className="text-gray-500 xl:text-2xl lg:text-2xl text-lg">Most popular destinations around the world, from historical places
                        to natural wonders.</p>
                    <div className="hidden xl:flex lg:flex gap-10">
                        <button className="p-6 bg-black text-white text-lg rounded-2xl hover:bg-primary" onClick={() => setIndex(index - 1)}>
                            <IoIosArrowBack />
                        </button>
                        <button className="p-6 bg-black text-white text-lg rounded-2xl hover:bg-primary" onClick={() => setIndex(index + 1)}>
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>
            </div>
            {/*cards*/}
            <div className="w-full flex flex-col gap-16 card--list">
                <div className="flex overflow-x-scroll pb-10 no-scrollbar items-center justify-center xl:justify-start lg:justify-start">
                    <div className="flex flex-nowrap">
                        <div className="inline-block px-3 ">
                            <div className="xl:w-[497px] xl:h-[661px] lg:w-[497px] lg:h-[661px] w-[228px] h-[320] overflow-hidden rounded-3xl border">
                                <img src="/pexels-alexazabache-3214972.jpg" alt="" className="w-full h-full" />
                            </div>
                            <div className="relative z-10 text-xl text-white left-6 -top-28 flex flex-col gap-4">
                                <h1 className="">Karnak Temple</h1>
                                <h3 className="flex gap-2 items-center"><FaLocationDot />Luxor, Egypt</h3>
                            </div>
                        </div>
                        <div className="xl:inline-block lg:inline-block hidden px-3">
                            <div className="xl:w-[497px] xl:h-[661px] lg:w-[497px] lg:h-[661px] w-[288px] h-[320] overflow-hidden rounded-3xl border">
                                <img src="/pexels-amar-saleem-15661-77171.jpg" alt="" className="w-full h-full" />
                            </div>
                            <div className="relative z-10 text-xl text-white left-6 -top-28 flex flex-col gap-4">
                                <h1 className="">Big Ben</h1>
                                <h3 className="flex gap-2 items-center"><FaLocationDot />London, England</h3>
                            </div>
                        </div>
                        <div className="xl:inline-block lg:inline-block hidden px-3">
                            <div className="xl:w-[497px] xl:h-[661px] lg:w-[497px] lg:h-[661px] w-[288px] h-[320] overflow-hidden rounded-3xl border">
                                <img src="/pexels-stuthnagyniki-1128424.jpg" alt="" className="w-full h-full" />
                            </div>
                            <div className="relative z-10 text-xl text-white left-6 -top-28 flex flex-col gap-4">
                                <h1 className="">Museum Island</h1>
                                <h3 className="flex gap-2 items-center"><FaLocationDot />Berlin, Germany</h3>
                            </div>
                        </div>
                        <div className="xl:inline-block lg:inline-block hidden px-3">
                            <div className="xl:w-[497px] xl:h-[661px] lg:w-[497px] lg:h-[661px] w-[288px] h-[320] overflow-hidden rounded-3xl border">
                                <img src="/pexels-suissounet-1530259.jpg" alt="" className="w-full h-full" />
                            </div>
                            <div className="relative z-10 text-xl text-white left-6 -top-28 flex flex-col gap-4">
                                <h1 className="">Eiffel Tower</h1>
                                <h3 className="flex gap-2 items-center"><FaLocationDot />Paris, France</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex xl:hidden lg:hidden gap-10 items-center justify-center">
                    <button className="p-6 bg-black text-white text-lg rounded-2xl hover:bg-primary" onClick={() => setIndex(index - 1)}>
                        <IoIosArrowBack />
                    </button>
                    <button className="p-6 bg-black text-white text-lg rounded-2xl hover:bg-primary" onClick={() => setIndex(index + 1)}>
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>
        </div >
    )
}