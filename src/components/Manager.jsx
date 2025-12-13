import { useRef, useState, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify";
import Card from "./card"
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {

    const [siteName, SetSiteName] = useState("")
    const [sitePassword, SetSitePassword] = useState("")
    const [siteNote, SetSiteNote] = useState("")
    const [siteID, SetSiteID] = useState("")
    const [showpassword, setShowpassword] = useState(false);
    const password_text_box = useRef();
    const [passwordType, setPasswordType] = useState("password")
    const [passwordArray, setPasswordArray] = useState([])
    const getpasswords = async () => {
        let req = await fetch("http://localhost:3000/");
        let passwords = await req.json();
        setPasswordArray(passwords)
    }
    useEffect(() => {
        //Load passwords from local storage
        // let localstoragePassword = localStorage.getItem("Passwords");
        // if (localstoragePassword) {
        //     setPasswordArray(JSON.parse(localstoragePassword))
        // }
        getpasswords();
    }, [])
    useEffect(() => {
        if (showpassword) {
            setPasswordType("text");
        } else {
            setPasswordType("password");
        }
    }, [showpassword])

    let formData = {
        "Site": siteName,
        "Note": siteNote,
        "ID": siteID,
        "Password": sitePassword,
        "id": uuidv4(),
    }
    const savePassword = async () => {

        if (sitePassword.length < 8) {
            toast.error('Invalid/Incomplete crenditials !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else if (siteName.length <= 3 || !siteName.includes('.') || siteID.length <= 3) {
            toast.error('Invalid password !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else {
            toast.success('Suceessfully saved !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setPasswordArray([...passwordArray, formData]);
            await fetch("http://localhost:3000/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData })
            });

            // localStorage.setItem("Passwords", JSON.stringify([...passwordArray, formData]))
            // setPasswordArray([...passwordArray, formData]);
            // console.log([...passwordArray, formData]);

            SetSiteNote("")
            SetSiteID("")
            SetSitePassword("")
            SetSiteName("")
        }
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            // transition="Bounce"
            />

            <div>
                <div className="text-white flex flex-col justify-center items-center py-5 px-5 sm:px-10">
                    <h1 className="text-white text-lg sm:text-xl md:text-3xl p-0.5 flex justify-center">
                        <span className="text-green-400 text-xl sm:text-4xl"> &lt;</span>
                        Pass <span className="text-green-400 text-xl sm:text-3xl">ly</span>
                        <span className="text-green-400 text-xl sm:text-4xl"> /&gt;</span>

                    </h1>
                    <p className="sm:text-base text-[14px]">Your own password manager</p>
                </div>
                <div className="flex flex-col justify-center px-2 sm:px-5 py-10 sm:py-20 bg-neutral-950 border-2 border-gray-200 sm:rounded-full rounded-sm  rounded-r-none border-r-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] gap-5 sm:gap-10 items-center mx-auto">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
                        <input className="px-1 py-2 sm:px-2 sm:py-3 rounded-lg focus:bg-green-500 font-semibold hover:bg-green-400 transition-all duration-100 focus:font-bold text-sm sm:text-lg md:text-xl placeholder:text-green-900 focus:text-shadow-lg/30 focus:text-white outline-2 outline-green-500 selection:outline-0  focus:outline-green-500 border-0  " type="text" name="websiteName" placeholder="Enter website name/URL" value={siteName} onChange={(a) => {
                            SetSiteName(a.target.value);
                        }} />
                        <input className="px-1 py-2 sm:px-2 sm:py-3 rounded-lg focus:bg-green-500 font-semibold hover:bg-green-400 transition-all duration-100 focus:font-bold text-sm sm:text-lg md:text-xl placeholder:text-green-900 focus:text-shadow-lg/30 focus:text-white outline-2 outline-green-500 selection:outline-0  focus:outline-green-500 border-0  " type="text" name="Note" placeholder="Any related note" value={siteNote} onChange={(a) => {
                            SetSiteNote(a.target.value);
                        }} />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
                        <div className="mt-1">

                            <input className="px-1 py-2 sm:px-2 sm:py-3 rounded-lg focus:bg-green-500 font-semibold hover:bg-green-400 transition-all duration-100 focus:font-bold text-sm sm:text-lg md:text-xl placeholder:text-green-900 focus:text-shadow-lg/30 focus:text-white outline-2 outline-green-500 selection:outline-0  focus:outline-green-500 border-0  " type="text" name="websiteID" placeholder="UserID" value={siteID} onChange={(a) => {
                                SetSiteID(a.target.value);
                            }} />
                        </div>
                        <div className="relative flex items-center">
                            <input ref={password_text_box} className="px-1 py-2 sm:px-2 sm:py-3 rounded-lg focus:bg-green-500 font-semibold hover:bg-green-400 transition-all duration-100 focus:font-bold text-sm sm:text-lg md:text-xl placeholder:text-green-900 focus:text-shadow-lg/30 focus:text-white outline-2 outline-green-500 selection:outline-0  focus:outline-green-500 border-0  " type={passwordType} name="websitePassword" placeholder="Password" value={sitePassword} onChange={(a) => {
                                SetSitePassword(a.target.value);
                            }} />
                            <span className="text-black absolute right-1 cursor-pointer" onClick={() => { setShowpassword(!showpassword) }}>

                                {showpassword ?
                                    <lord-icon
                                        src="https://cdn.lordicon.com/knitbwfa.json"
                                        trigger="hover"
                                        stroke="bold"
                                        className="w-[30px] sm:w-[40px] md:w-[50px] pt-1"
                                    >
                                    </lord-icon> :
                                    <lord-icon
                                        src="https://cdn.lordicon.com/knitbwfa.json"
                                        trigger="hover"
                                        state="hover-cross"
                                        className="w-[30px] sm:w-[40px] md:w-[50px] pt-1"
                                    >
                                    </lord-icon>}

                            </span>
                        </div>
                        <div className="flex flex-nowrap justify-center items-center relative">
                            <button onClick={savePassword} className="px-0.5 py-1 sm:px-1 sm:py-2 md:px-2 md:py-3 hover:rounded-xl hover:border-green-700 hover:border-8 border-green-400  border-8 box-border rounded-lg focus:bg-green-500 flex justify-center items-center font-semibold hover:bg-green-400 transition-all duration-100 focus:font-bold text-xs sm:text-sm md:text-lg lg:text-xl text-shadow-lg/30 hover:text-black text-green-950 outline-2 outline-green-500 selection:outline-0  focus:outline-green-500 bg-green-400 "> <lord-icon src="https://cdn.lordicon.com/lzsupfwm.json" trigger="hover" className="w-[25px] sm:w-[30px] md:w-[40px] lg:w-[50px] " />
                                <div className="pr-2 sm:pr-3 md:pr-4 lg:pr-5">Add a password</div>
                            </button>

                        </div>
                    </div>

                </div>
                <div className="w-full border-white border-[3px] sm:rounded-r-full rounded-r-sm h-[36vh] my-5 pr-5 sm:pr-20 py-5 gap-6 flex-col bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] overflow-auto">

                    {passwordArray.length == 0 ?
                        <div className=" w-full h-[30vh] text-center flex justify-center items-center ">
                            <h1 className="text-2xl sm:text-4xl hover:text-shadow-lg/30 text-shadow-white hover:scale-125 transition-all duration-100 px-2 text-gray-400 justify-self-center font-semibold ">No <span className="text-green-400">password</span> to show <div className="text-gray-300 text-sm pt-2 hover:animate-shake hover:scale-125 transition-all duration-100">Try adding a <span className="text-green-400">password </span></div></h1>
                        </div> :
                        <h1 className="text-2xl px-2 text-gray-200 font-semibold">Your passwords</h1>}
                    {/* here will be all password cards */}
                    <div className="w-full snap-y snap-proximity overflow-auto h-[89%]">
                        {passwordArray.map((e, index) => {
                            return <Card key={index} formdata={formData} passwordArray={passwordArray} setPasswordArray={setPasswordArray} id={e.id} sitePassword={e.Password} siteName={e.Site} siteNote={e.Note} siteID={e.ID} SetSiteID={SetSiteID} SetSiteName={SetSiteName} SetSiteNote={SetSiteNote} SetSitePassword={SetSitePassword} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Manager

