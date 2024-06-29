import { useState } from "react"
import { FaArrowRightLong } from "react-icons/fa6";

export default function Bot() {
    const [formData, setFormData] = useState(
        {
            destination: "",
            person: "",
            checkIn: "",
            checkOut: "",
        }
    )
    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }


    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }
    return (
        <form onSubmit={handleSubmit} className="booking flex flex-col xl:flex-row lg:flex-row items-center justify-center lg:justify-between xl:justify-between xl:pl-8 lg:pl-8 gap-10 xl:w-11/12 lg:w-11/12 bg-white dark:bg-slate-900 dark:text-white mb-24 rounded-r-lg">
            <div className="flex flex-col gap-4 border-b-2 border-gray-950 w-40 lg:w-36">
                <label htmlFor="destination">Destination</label>
                <input
                    type="text"
                    name="destination"
                    id="destination"
                    className="input outline-none dark:bg-slate-900 dark:text-white pb-3"
                    placeholder="Dubai"
                    onChange={handleChange}
                    value={formData.destination}
                />
            </div>
            <div className="flex flex-col gap-4 border-b-2 border-gray-950 w-40 lg:w-36">
                <label htmlFor="person">Person</label>
                <select
                    id="person"
                    className="input outline-none dark:bg-slate-900 dark:text-white pb-3"
                    value={formData.person}
                    onChange={handleChange}
                    name="person"
                >
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                    <option value="five">5</option>
                    <option value="six">6</option>
                    <option value="seven">7</option>
                </select>
            </div>
            <div className="flex flex-col gap-4 border-b-2 border-gray-950 w-40 lg:w-36">
                <label htmlFor="checkIn">Check In</label>
                <input
                    id="checkIn"
                    className="date outline-none dark:bg-slate-900 dark:text-white dark:[color-scheme:dark] pb-3"
                    type="text" 
                    placeholder="Day/Month/Year"
                    onFocus={(e) => e.target.type = 'date'} // Corrected to onFocus and using arrow function for setting type
                    onBlur={(e) => !e.target.value && (e.target.type = 'text')} // Corrected to onBlur and using arrow function for conditional type change
                    onChange={handleChange}
                    name="checkIn"
                    value={formData.checkIn}
                />
            </div>
            <div className="flex flex-col gap-4 border-b-2 border-gray-950 w-40 lg:w-36">
                <label htmlFor="checkOut">Check Out</label>
                <input
                    id="checkOut"
                    type="text"
                    placeholder="Day/Month/Year"
                    onFocus={(e) => e.target.type = 'date'} // Corrected to onFocus and using arrow function for setting type
                    onBlur={(e) => !e.target.value && (e.target.type = 'text')} // Corrected to onBlur and using arrow function for conditional type change
                    className="date outline-none dark:bg-slate-900 dark:text-white dark:[color-scheme:dark] pb-3"
                    onChange={handleChange}
                    name="checkOut"
                    value={formData.checkOut}
                />
            </div>

            <button className="bg-primary text-white text-3xl px-5 py-10 rounded-r-lg flex items-center gap-3">Book <br /> Now  <FaArrowRightLong /></button>

        </form>
    )
}