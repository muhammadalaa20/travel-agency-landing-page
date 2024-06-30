import { useState } from "react";
import { useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
export default function Top() {
    const [index, setIndex] = useState(0);
    const circles = 5

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((currentIndex) => (currentIndex < circles - 1 ? currentIndex + 1 : 0));
        }, 5000);
        return () => clearTimeout(timer);
    }, [index, circles]);


    return (
        <div className="flex flex-row xl:justify-between lg:justify-between justify-start items-center">
            <div className={`${index === 0 ? "block" : "hidden"} xl:ml-8 lg:ml-8 py-20 px-3 gap-5 flex flex-col text-white`}>
                <h1 className="xl:text-8xl lg:text-7xl md:text-7xl text-4xl">Start your unforgettable
                    journey with us.</h1>
                <p className="text-xl">The best travel for your journey begins now</p>
            </div>
            <div className={`${index === 1 ? "block" : "hidden"} xl:ml-8 lg:ml-8 py-20 px-3 gap-5 flex flex-col text-white`}>
                <h1 className="xl:text-8xl lg:text-7xl md:text-7xl text-4xl text-accent">Start your unforgettable
                    journey with us.</h1>
                <p className="text-xl">The best travel for your journey begins now</p>
            </div>
            <div className={`${index === 2 ? "block" : "hidden"} xl:ml-8 lg:ml-8 py-20 px-3 gap-5 flex flex-col text-white`}>
                <h1 className="xl:text-8xl lg:text-7xl md:text-7xl text-4xl text-blue-500">Start your unforgettable
                    journey with us.</h1>
                <p className="text-xl">The best travel for your journey begins now</p>
            </div>
            <div className={`${index === 3 ? "block" : "hidden"} xl:ml-8 lg:ml-8 py-20 px-3 gap-5 flex flex-col text-white`}>
                <h1 className="xl:text-8xl lg:text-7xl md:text-7xl text-4xl text-orange-300">Start your unforgettable
                    journey with us.</h1>
                <p className="text-xl">The best travel for your journey begins now</p>
            </div>
            <div className={`${index === 4 ? "block" : "hidden"} xl:ml-8 lg:ml-8 py-20 px-3 gap-5 flex flex-col text-white`}>
                <h1 className="xl:text-8xl lg:text-7xl md:text-7xl text-4xl text-pink-600">Start your unforgettable
                    journey with us.</h1>
                <p className="text-xl">The best travel for your journey begins now</p>
            </div>
            <div className="hidden xl:block lg:block p-2">
                <ul className="flex flex-col gap-6 items-center justify-center p-1">
                    <li className={`${index === 0 ? "bg-primary" : "bg-white dark:bg-slate-900"} w-3 h-3 rounded-full text-center cursor-pointer circle`} onClick={() => { setIndex(0) }}></li>
                    <li className={`${index === 1 ? "bg-primary" : "bg-white dark:bg-slate-900"} w-3 h-3 rounded-full text-center cursor-pointer circle`} onClick={() => { setIndex(1) }}></li>
                    <li className={`${index === 2 ? "bg-primary" : "bg-white dark:bg-slate-900"} w-3 h-3 rounded-full text-center cursor-pointer circle`} onClick={() => { setIndex(2) }}></li>
                    <li className={`${index === 3 ? "bg-primary" : "bg-white dark:bg-slate-900"} w-3 h-3 rounded-full text-center cursor-pointer circle`} onClick={() => { setIndex(3) }}></li>
                    <li className={`${index === 4 ? "bg-primary" : "bg-white dark:bg-slate-900"} w-3 h-3 rounded-full text-center cursor-pointer circle`} onClick={() => { setIndex(4) }}></li>
                    <li className="w-4 h-4 rounded-full flex items-center justify-center cursor-pointer text-white md:text-5xl  hover:text-primary" onClick={() => { setIndex(prevState => prevState > 0 ? prevState - 1 : circles - 1) }} ><IoIosArrowUp /></li>
                    <li className="w-4 h-4 rounded-full rotate-180 flex items-center justify-center cursor-pointer text-white  hover:text-primary" onClick={() => { setIndex(prevState => prevState < circles - 1 ? prevState + 1 : 0) }}><IoIosArrowUp /></li>
                </ul>
            </div>
        </div>
    )
}