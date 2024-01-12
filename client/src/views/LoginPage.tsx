import { NavBar } from "../components"

export default function LoginPage() {
    return <>
    <div className="bg-gray-50 min-h-screen flex flex-col gap-y-20">
        <NavBar />
        <div className="flex justify-center text-slate-700">
            <div className="bg-white flex justify-center w-1/2 max-sm:w-5/6 shadow-md">
                <div className="flex flex-col items-center p-10 gap-y-10 w-5/6 max-sm:w-[95%] pb-20">
                    <div>
                        <h1 className="text-xl">Login to Caliber</h1>
                    </div>
                    <form className="flex flex-col w-full gap-y-5">
                        <div className="flex flex-col gap-y-2 ">
                            <label htmlFor="username">Username</label>
                            <div className="border border-gray-300 rounded-md overflow-hidden">
                                <input type="text" name="username" className="p-2 w-full"/>
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="password">Password</label>
                            <div className="border border-gray-300 rounded-md overflow-hidden">
                                <input type="text" name="password" className="p-2 w-full"/>
                            </div>
                        </div>

                        <p className="text-[0.9rem] ml-3 hover:cursor-pointer hover:text-blue-300 text-blue-500 w-fit">Forgot password?</p>

                        <div className="bg-blue-600 text-center text-white font-bold rounded-md hover:cursor-pointer hover:bg-blue-500 mt-5">
                            <button type="submit" className="p-2">
                                LOGIN
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <footer className="bg-white">
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div></div>
            <div></div>
        </footer>
    </div>
    </>
}