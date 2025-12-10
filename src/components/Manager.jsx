import { useRef, useState, useEffect } from "react"
import Card from "./card"

const Manager = () => {

    const [siteName, SetSiteName] = useState("")
    const [sitePassword, SetSitePassword] = useState("")
    const [siteNote, SetSiteNote] = useState("")
    const [siteID, SetSiteID] = useState("")
    const [showpassword, setShowpassword] = useState(false);
    const password_text_box = useRef();
    const [passwordType, setPasswordType] = useState("password")
    const [passwordArray, setPasswordArray] = useState([])
    useEffect(() => {
        //Load passwords from local storage
        let localstoragePassword = localStorage.getItem("Passwords");
        if (localstoragePassword) {
            setPasswordArray(JSON.parse(localstoragePassword))
        }
    }, [])
    useEffect(() => {
        if (showpassword) {
            setPasswordType("text");
        } else {
            setPasswordType("password");
        }
    }, [showpassword])

    const savePassword = () => {
        let formData = {
            "Site": siteName,
            "Note": siteNote,
            "ID": siteID,
            "Password": sitePassword
        }
        setPasswordArray([...passwordArray, formData]);
        localStorage.setItem("Passwords", JSON.stringify([...passwordArray, formData]))
        console.log([...passwordArray, formData]);

        SetSiteNote("")
        SetSiteID("")
        SetSitePassword("")
        SetSiteName("")
    }
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
                    <input className="px-2 py-3 rounded-lg focus:bg-green-500 font-semibold hover:bg-green-400 transition-all duration-100 focus:font-bold text-xl placeholder:text-green-900 focus:text-shadow-lg/30 focus:text-white outline-2 outline-green-500 selection:outline-0  focus:outline-green-500 border-0  " type="text" name="websiteName" placeholder="Enter website name/URL" value={siteName} onChange={(a) => {
                        SetSiteName(a.target.value);
                    }} />
                    <input className="px-2 py-3 rounded-lg focus:bg-green-500 font-semibold hover:bg-green-400 transition-all duration-100 focus:font-bold text-xl placeholder:text-green-900 focus:text-shadow-lg/30 focus:text-white outline-2 outline-green-500 selection:outline-0  focus:outline-green-500 border-0  " type="text" name="Note" placeholder="Any related note" value={siteNote} onChange={(a) => {
                        SetSiteNote(a.target.value);
                    }} />
                </div>
                <div className="flex gap-10">
                    <div className="mt-1">

                        <input className="px-2 py-3 rounded-lg focus:bg-green-500 font-semibold hover:bg-green-400 transition-all duration-100 focus:font-bold text-2xl placeholder:text-green-900 focus:text-shadow-lg/30 focus:text-white outline-2 outline-green-500 selection:outline-0  focus:outline-green-500 border-0  " type="text" name="websiteID" placeholder="UserID" value={siteID} onChange={(a) => {
                            SetSiteID(a.target.value);
                        }} />
                    </div>
                    <div className="relative flex items-center">
                        <input ref={password_text_box} className="px-2 py-3 rounded-lg focus:bg-green-500 font-semibold hover:bg-green-400 transition-all duration-100 focus:font-bold text-2xl placeholder:text-green-900 focus:text-shadow-lg/30 focus:text-white outline-2 outline-green-500 selection:outline-0  focus:outline-green-500 border-0  " type={passwordType} name="websitePassword" placeholder="Password" value={sitePassword} onChange={(a) => {
                            SetSitePassword(a.target.value);
                        }} />
                        <span className="text-black absolute right-1 cursor-pointer" onClick={() => { setShowpassword(!showpassword) }}>

                            {showpassword ?
                                <lord-icon
                                    src="https://cdn.lordicon.com/knitbwfa.json"
                                    trigger="hover"
                                    stroke="bold"
                                    className="w-[50px] pt-1"
                                >
                                </lord-icon> :
                                <lord-icon
                                    src="https://cdn.lordicon.com/knitbwfa.json"
                                    trigger="hover"
                                    state="hover-cross"
                                    className="w-[50px] pt-1"
                                >
                                </lord-icon>}

                        </span>
                    </div>
                    <div className="flex flex-nowrap justify-center items-center relative">
                        <button onClick={savePassword} className="px-2 py-3 hover:rounded-xl hover:border-green-700 hover:border-8 border-green-400  border-8 box-border rounded-lg focus:bg-green-500 flex justify-center items-center font-semibold hover:bg-green-400 transition-all duration-100 focus:font-bold text-xl text-shadow-lg/30 hover:text-black text-green-950 outline-2 outline-green-500 selection:outline-0  focus:outline-green-500 bg-green-400 "> <lord-icon src="https://cdn.lordicon.com/lzsupfwm.json" trigger="hover" className="w-[50px] " />
                            <div className="pr-5">Add a password</div>
                        </button>

                    </div>
                </div>

            </div>
            <div className="w-full border-white border-[3px] rounded-r-full h-[40vh] my-5 pr-20 py-5 gap-6 flex-col bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] overflow-auto">

                {passwordArray.length == 0 ?
                    <div className=" w-full h-[30vh] text-center flex justify-center items-center ">
                        <h1 className="text-4xl hover:text-shadow-lg/30 text-shadow-white hover:scale-125 transition-all duration-100 px-2 text-gray-400 justify-self-center font-semibold ">No <span className="text-green-400">password</span> to show <div className="text-gray-300 text-sm pt-2 hover:animate-shake hover:scale-125 transition-all duration-100">Try adding a <span className="text-green-400">password </span></div></h1>
                    </div> :
                    <h1 className="text-2xl px-2 text-gray-200 font-semibold ">Your passwords</h1>}
                {/* here will be all password cards */}
                <div className="overflow-auto">
                {passwordArray.map((e, index) => {
                    return <Card key={index} sitePassword={e.Password} siteName={e.Site} siteNote={e.Note} siteID={e.ID} />
                })}
                </div>
            </div>
        </div>
    )
}

export default Manager

