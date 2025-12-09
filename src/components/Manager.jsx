import { useState } from "react"

const Manager = () => {
    const [siteName, SetSiteName] = useState("")
    const [sitePassword, SetSitePassword] = useState("")
    const [siteNote, SetSiteNote] = useState("")
    const [siteID, SetSiteID] = useState("")
    return (
        <div>
            <div className="text-white flex flex-col justify-center items-center py-5 px-10">
                <h1 className="text-white text-3xl p-0.5 flex justify-center">
                    <span className="text-green-400 text-4xl"> &lt;</span>
                    Pass <span className="text-green-400 text-3xl">ly</span>
                    <span className="text-green-400 text-4xl"> /&gt;</span>

                </h1>
                <p>Your own password manager</p>
            </div>
            <div className="flex flex-col justify-center px-5 py-20 bg-neutral-950 border-2 border-gray-200 rounded-full rounded-r-none border-r-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] gap-10 items-center mx-auto">
                <div className="flex gap-10">
                    <input className="px-2 py-3 rounded-lg focus:bg-green-500 font-semibold hover:bg-green-400 transition-all duration-100 focus:font-bold text-xl placeholder:text-green-900 focus:text-shadow-lg/30 focus:text-white outline-2 outline-green-500 selection:outline-0  focus:outline-green-500 border-0  " type="text" name="websiteName" placeholder="Enter website name" value={siteName} onChange={(a) => {
                        SetSiteName(a.target.value);
                    }} />
                    <input className="px-2 py-3 rounded-lg focus:bg-green-500 font-semibold hover:bg-green-400 transition-all duration-100 focus:font-bold text-xl placeholder:text-green-900 focus:text-shadow-lg/30 focus:text-white outline-2 outline-green-500 selection:outline-0  focus:outline-green-500 border-0  " type="text" name="Note" placeholder="Any related note" value={siteNote} onChange={(a) => {
                        SetSiteNote(a.target.value);
                    }} />
                </div>
                <div className="flex gap-10">
                    <input className="px-2 py-3 rounded-lg focus:bg-green-500 font-semibold hover:bg-green-400 transition-all duration-100 focus:font-bold text-2xl placeholder:text-green-900 focus:text-shadow-lg/30 focus:text-white outline-2 outline-green-500 selection:outline-0  focus:outline-green-500 border-0  " type="text" name="websiteID" placeholder="UserID" value={siteID} onChange={(a) => {
                        SetSiteID(a.target.value);
                    }} />
                    <input className="px-2 py-3 rounded-lg focus:bg-green-500 font-semibold hover:bg-green-400 transition-all duration-100 focus:font-bold text-2xl placeholder:text-green-900 focus:text-shadow-lg/30 focus:text-white outline-2 outline-green-500 selection:outline-0  focus:outline-green-500 border-0  " type="text" name="websitePassword" placeholder="Password" value={sitePassword} onChange={(a) => {
                        SetSitePassword(a.target.value);
                    }} />
                    <div className="flex flex-nowrap justify-center items-center relative">
                        <button className="px-2 py-3 hover:rounded-xl hover:border-green-700 hover:border-8 border-green-400  border-8 box-border rounded-lg focus:bg-green-500 flex justify-center items-center font-semibold hover:bg-green-400 transition-all duration-100 focus:font-bold text-xl text-shadow-lg/30 hover:text-black text-green-950 outline-2 outline-green-500 selection:outline-0  focus:outline-green-500 bg-green-400 "> <lord-icon src="https://cdn.lordicon.com/lzsupfwm.json" trigger="hover" className="w-[50px] " />
                            <div className="pr-5">Add a password</div>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manager

