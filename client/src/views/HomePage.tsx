import { NavBar } from "../components";

export default function HomePage() {
    return <>
    <div className="bg-gray-50 min-h-screen flex flex-col w-full">
        <NavBar />
        <div className="bg-blue-400 max-sm:flex-col max-sm:gap-y-5 flex p-5 gap-x-5">
            <div className="w-1/2 max-sm:w-full">
                <div className="bg-white flex p-1 rounded-md pl-3 h-12">
                    <input type="text" placeholder="Search for a job title or company" className="w-[89%]"/>
                    <div className="w-[11%] bg-blue-400 rounded-md flex justify-center">
                        <button className=" text-white font-bold">Search</button>
                    </div>
                </div>
            </div>
            <div className="w-1/2 max-sm:w-full ">
                 <div className="bg-white flex p-1 rounded-md pl-3 h-12">
                    <select name="filter" id="filter" className="w-full bg-white focus:outline-0 text-center" >
                        <option value="" disabled selected>Filter by</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="flex max-h-screen">
            <div className="w-1/3 bg-slate-400 overflow-auto">
                <h1>Job Card</h1>
                <h1>Job Card</h1>
                <h1>Job Card</h1>
                <h1>Job Card</h1>
                <h1>Job Card</h1>
                <h1>Job Card</h1>
                <h1>Job Card</h1>
                <h1>Job Card</h1>
                <h1>Job Card</h1>
                <h1>Job Card</h1>
                <h1>Job Card</h1>
                <h1>Job Card</h1>
                <h1>Job Card</h1>
                <h1>Job Card</h1>
                <h1>Job Card</h1>
                <h1>Job Card</h1>
                <h1>Job Card</h1>
                <h1>Job Card</h1>
                <h1>Job Card</h1>
                <h1>Job Card</h1>
                <h1>Job Card</h1>
                <h1>Job Card</h1>
                <h1>Job Card</h1>
                <h1>Job Card</h1>
                <h1>Job Card</h1>
            </div>
            <div className="w-2/3 bg-red-400">
                <h1>Job Detail</h1>
            </div>
        </div>
    </div>
    </>
}