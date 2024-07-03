import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";
import { useState } from "react";
export default function SecondSec() {
    const [cardOne, setCardOne] = useState([true, false, false, false, false]);
    const [cardTwo, setCardTwo] = useState([true, false, false, false, false]);
    const [cardThree, setCardThree] = useState([true, false, false, false, false]);
    const [cardFour, setCardFour] = useState([true, false, false, false, false]);
    const [order, setOrder] = useState(["order-1", "order-2", "order-3", "order-4"])
    const [display, setDisplay] = useState(["", "hidden", "hidden", "hidden"])
    const rightMove = () => {
        const shiftedCard = order.shift();
        setOrder([...order, shiftedCard]);
    }

    const leftMove = () => {
        const unShiftedCard = order.pop();
        setOrder([unShiftedCard, ...order]);
    }
    const shiftLeft = () => {
        const shiftComponent = display.shift();
        setDisplay([...display, shiftComponent]);
    }
    const shiftRight = () => {
        const unShiftComponent = display.pop();
        setDisplay([unShiftComponent, ...display]);
    }

    return (
        <div className="first-sec pt-20 xl:pt-24 lg:pt-24 px-4 xl:px-8 lg:px-8 dark:bg-slate-900 dark:text-white flex flex-col gap-24">
            <div className="flex flex-col">
                <h1 className="sec-title flex flex-col justify-end items-end text-4xl xl:text-6xl lg:text-6xl mb-5">Special Offer</h1>
                <div className="flex justify-end xl:justify-between lg:justify-between items-center gap-8">
                    <div className="hidden xl:flex lg:flex gap-10">
                        <button className="p-6 bg-black text-white text-lg rounded-2xl hover:bg-primary" onClick={leftMove}>
                            <IoIosArrowBack />
                        </button>
                        <button className="p-6 bg-black text-white text-lg rounded-2xl hover:bg-primary" onClick={rightMove}>
                            <IoIosArrowForward />
                        </button>
                    </div>
                    <p className="text-gray-500 xl:text-2xl lg:text-2xl text-lg">Check out our special offer and discounts.</p>

                </div>
            </div>
            {/*cards*/}
            <div className="w-full flex flex-col gap-16 card--list">
                <div className="flex overflow-x-scroll pb-10 no-scrollbar items-center justify-center xl:justify-start lg:justify-start">
                    <div className="flex flex-nowrap">
                        <div className={`inline-block card ${order[0]} px-3 rounded-t-3xl ${display[0]} card--component`}>
                            <div className="flex flex-col xl:w-[341px] lg:w-[341px] xl:h-[623px] lg:h-[623px] w-[221px] h-[675px] bg-[#FFF8F1] rounded-3xl">
                                <img src="/image1.jpg" alt="lisbon" className="w-full pb-5 rounded-t-3xl h-[306px]" />
                                <h1 className="pb-2 text-2xl px-3 dark:text-black">Lisbon, Portugal</h1>
                                <div className="flex text-xl gap-1 cursor-pointer pb-6 px-3">
                                    <IoStarSharp className="text-yellow-300 star" onClick={() => setCardOne([true, false, false, false, false])} />
                                    <IoStarSharp className={`${cardOne[1] === true ? "text-yellow-300" : "text-gray-500"} star`} onClick={() => setCardOne([true, true, false, false, false])} />
                                    <IoStarSharp className={`${cardOne[2] === true ? "text-yellow-300" : "text-gray-500"} star`} onClick={() => setCardOne([true, true, true, false, false])} />
                                    <IoStarSharp className={`${cardOne[3] === true ? "text-yellow-300" : "text-gray-500"} star`} onClick={() => setCardOne([true, true, true, true, false])} />
                                    <IoStarSharp className={`${cardOne[4] === true ? "text-yellow-300" : "text-gray-500"} star`} onClick={() => setCardOne([true, true, true, true, true])} />
                                </div>
                                <p className="text-black text-lg pb-6 px-3">5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.</p>
                                <div className="flex justify-between items-center pb-2.5 px-3">
                                    <h1 className="text-lg text-gray-500">From <span className="text-primary text-2xl">&#8364;500</span></h1>
                                    <button className="py-4 px-6 bg-primary text-white text-xl rounded-2xl hover:bg-primary">Details</button>
                                </div>
                            </div>

                        </div>
                        <div className={`xl:inline-block lg:inline-block ${order[1]} ${display[1]} px-3 card card--component`}>
                            <div className="flex flex-col xl:w-[341px] lg:w-[341px] xl:h-[623px] lg:h-[623px] w-[221px] h-[675px] bg-[#FFF8F1] rounded-3xl">
                                <img src="/image2.jpg" alt="lisbon" className="w-full pb-5 rounded-t-3xl h-[306px]" />
                                <h1 className="pb-2 text-2xl px-3 dark:text-black">Athens, Greece</h1>
                                <div className="flex text-xl gap-1 cursor-pointer pb-6 px-3">
                                    <IoStarSharp className="text-yellow-300 star" onClick={() => setCardTwo([true, false, false, false, false])} />
                                    <IoStarSharp className={`${cardTwo[1] === true ? "text-yellow-300" : "text-gray-500"} star`} onClick={() => setCardTwo([true, true, false, false, false])} />
                                    <IoStarSharp className={`${cardTwo[2] === true ? "text-yellow-300" : "text-gray-500"} star`} onClick={() => setCardTwo([true, true, true, false, false])} />
                                    <IoStarSharp className={`${cardTwo[3] === true ? "text-yellow-300" : "text-gray-500"} star`} onClick={() => setCardTwo([true, true, true, true, false])} />
                                    <IoStarSharp className={`${cardTwo[4] === true ? "text-yellow-300" : "text-gray-500"} star`} onClick={() => setCardTwo([true, true, true, true, true])} />
                                </div>
                                <p className="text-black text-lg pb-6 px-3">5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.</p>
                                <div className="flex justify-between items-center pb-2.5 px-3">
                                    <h1 className="text-lg text-gray-500">From <span className="text-primary text-2xl">&#8364;800</span></h1>
                                    <button className="py-4 px-6 bg-primary text-white text-xl rounded-2xl hover:bg-primary">Details</button>
                                </div>
                            </div>
                        </div>
                        <div className={`xl:inline-block lg:inline-block ${order[2]} ${display[2]} px-3 card card--component`}>
                            <div className="flex flex-col xl:w-[341px] lg:w-[341px] xl:h-[623px] lg:h-[623px] w-[221px] h-[675px] bg-[#FFF8F1] rounded-3xl">
                                <img src="/image3.jpg" alt="lisbon" className="w-full pb-5 rounded-t-3xl h-[306px]" />
                                <h1 className="pb-2 text-2xl px-3 dark:text-black">Rome, Italy</h1>
                                <div className="flex text-xl gap-1 cursor-pointer pb-6 px-3">
                                    <IoStarSharp className="text-yellow-300 star" onClick={() => setCardThree([true, false, false, false, false])} />
                                    <IoStarSharp className={`${cardThree[1] === true ? "text-yellow-300" : "text-gray-500"} star`} onClick={() => setCardThree([true, true, false, false, false])} />
                                    <IoStarSharp className={`${cardThree[2] === true ? "text-yellow-300" : "text-gray-500"} star`} onClick={() => setCardThree([true, true, true, false, false])} />
                                    <IoStarSharp className={`${cardThree[3] === true ? "text-yellow-300" : "text-gray-500"} star`} onClick={() => setCardThree([true, true, true, true, false])} />
                                    <IoStarSharp className={`${cardThree[4] === true ? "text-yellow-300" : "text-gray-500"} star`} onClick={() => setCardThree([true, true, true, true, true])} />
                                </div>
                                <p className="text-black text-lg pb-6 px-3">5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.</p>
                                <div className="flex justify-between items-center pb-2.5 px-3">
                                    <h1 className="text-lg text-gray-500">From <span className="text-primary text-2xl">&#8364;750</span></h1>
                                    <button className="py-4 px-6 bg-primary text-white text-xl rounded-2xl hover:bg-primary">Details</button>
                                </div>
                            </div>
                        </div>
                        <div className={`xl:inline-block lg:inline-block ${order[3]} ${display[3]} px-3 card card--component`}>
                            <div className="flex flex-col xl:w-[341px] lg:w-[341px] xl:h-[623px] lg:h-[623px] w-[221px] h-[675px] bg-[#FFF8F1] rounded-3xl">
                                <img src="/image4.jpg" alt="lisbon" className="w-full pb-5 rounded-t-3xl h-[306px]" />
                                <h1 className="pb-2 text-2xl px-3 dark:text-black">Alexandria, Egypt</h1>
                                <div className="flex text-xl gap-1 cursor-pointer pb-6 px-3">
                                    <IoStarSharp className="text-yellow-300 star" onClick={() => setCardFour([true, false, false, false, false])} />
                                    <IoStarSharp className={`${cardFour[1] === true ? "text-yellow-300" : "text-gray-500"} star`} onClick={() => setCardFour([true, true, false, false, false])} />
                                    <IoStarSharp className={`${cardFour[2] === true ? "text-yellow-300" : "text-gray-500"} star`} onClick={() => setCardFour([true, true, true, false, false])} />
                                    <IoStarSharp className={`${cardFour[3] === true ? "text-yellow-300" : "text-gray-500"} star`} onClick={() => setCardFour([true, true, true, true, false])} />
                                    <IoStarSharp className={`${cardFour[4] === true ? "text-yellow-300" : "text-gray-500"} star`} onClick={() => setCardFour([true, true, true, true, true])} />
                                </div>
                                <p className="text-black text-lg pb-6 px-3">5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.</p>
                                <div className="flex justify-between items-center pb-2.5 px-3">
                                    <h1 className="text-lg text-gray-500">From <span className="text-primary text-2xl">&#8364;1000</span></h1>
                                    <button className="py-4 px-6 bg-primary text-white text-xl rounded-2xl hover:bg-primary">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex xl:hidden lg:hidden gap-10 items-center justify-center">
                    <button className="p-6 bg-black text-white text-lg rounded-2xl hover:bg-primary" onClick={shiftLeft}>
                        <IoIosArrowBack />
                    </button>
                    <button className="p-6 bg-black text-white text-lg rounded-2xl hover:bg-primary" onClick={shiftRight}>
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>
        </div >
    )
}