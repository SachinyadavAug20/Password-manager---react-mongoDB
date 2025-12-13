import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const Card = ({ siteName, siteNote, siteID, sitePassword, setPasswordArray, id, formdata, passwordArray, SetSiteID, SetSiteName, SetSiteNote, SetSitePassword }) => {
    const [showPassword, setShowPassword] = useState(false);
    const copyText = (sitePassword) => {
        navigator.clipboard.writeText(sitePassword)
        toast.success(`Copied to clipboard `, {
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
    const handleDelete = async (uuid) => {

        if (confirm("Are you sure ?")) {
            console.log("deleting uuid", uuid);
            setPasswordArray(passwordArray.filter((item) => {
                return item.id != uuid;
            }))
            await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: uuid }) });
            // localStorage.setItem("Passwords", JSON.stringify(passwordArray.filter((item) => {
            //     return item.id != uuid;
            // })))
            toast.success(`Deleted credential of ${siteName}`, {
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
            toast.success('Operation terminated, password is save !', {
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
    }
    const handleEdit = async (uuid) => {
        SetSitePassword(sitePassword)
        SetSiteNote(siteNote)
        SetSiteName(siteName)
        SetSiteID(siteID)
        setPasswordArray(passwordArray.filter((item) => {
            return item.id != uuid;
        }))
        // localStorage.setItem("Passwords", JSON.stringify(passwordArray.filter((item) => {
        //     return item.id != uuid;
        // })))
        await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: uuid }) });
        toast.success(`Deleted credential of ${siteName}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

        console.log("editing uuid", uuid);
        toast.success(`Editing credential of ${siteName}`, {
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
            <div className="bg-slate-900 snap-center flex flex-col justify-around mx-1 sm:mx-2 md:ml-2 md:mr-10 border-2 border-blue-500 rounded-lg p-1 sm:p-2 md:p-4 my-1 sm:my-2 md:my-4 text-white hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200 relative">

                {/* Top Row - Site Info and ID/Password */}
                <div className="flex flex-row sm:grid sm:grid-cols-2 gap-2 sm:gap-4">
                    {/* Left Column - Site Info */}
                    <div className="flex flex-col justify-between items-start flex-1">
                        <div>
                            <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-0.5 sm:gap-1 md:gap-2 mb-1 sm:mb-2">
                                <h3 className="text-blue-400 text-sm sm:text-base md:text-lg font-semibold">Site Name:</h3>
                                <a
                                    className="capitalize text-white text-sm sm:text-base md:text-lg break-all hover:underline"
                                    href={"https://" + siteName}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {siteName}
                                </a>
                            </div>
                            <p className="text-gray-300 text-xs sm:text-sm">
                                <span className="text-blue-400">Note:</span> {siteNote}
                            </p>
                        </div>
                    </div>

                    {/* Right Column - ID and Password */}
                    <div className="space-y-1 sm:space-y-2 md:space-y-3 flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
                            <span className="text-blue-400 font-semibold mr-2 text-xs sm:text-sm md:text-base">ID:</span>
                            <span className="text-white text-xs sm:text-sm md:text-base break-all">{siteID}</span>
                        </div>
                        <div className="relative flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
                            <div className="flex items-center">
                                <span className="text-blue-400 font-semibold mr-2 text-xs sm:text-sm md:text-base">Password:</span>
                                <span className="text-white mr-2 text-xs sm:text-sm md:text-base break-all">
                                    {showPassword ? sitePassword : "*".repeat(sitePassword.length + 4)}
                                </span>
                            </div>
                            <div className="flex justify-center items-center gap-3">
                                <div className="cursor-pointer w-full sm:w-auto mt-1 sm:mt-0" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <lord-icon
                                        src="https://cdn.lordicon.com/knitbwfa.json"
                                        trigger="hover"
                                        state="hover-look-around"
                                        className="w-[20px] sm:w-[25px]"
                                    >
                                    </lord-icon> : <lord-icon
                                        src="https://cdn.lordicon.com/knitbwfa.json"
                                        state="hover-lashes"
                                        trigger="hover"
                                        className="w-[20px] sm:w-[25px]"
                                    >
                                    </lord-icon>}
                                </div>
                                <div className="cursor-pointer w-full sm:w-auto mt-1 sm:mt-0" onClick={() => { copyText(sitePassword) }}>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/tbabdzcy.json"
                                        trigger="hover"
                                        className="w-[20px] sm:w-[25px]">
                                    </lord-icon>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex gap-0.5 sm:gap-1 flex-col justify-center">
                    <div onClick={() => { handleEdit(id) }} className="cursor-pointer flex justify-center items-center px-1 sm:px-2 py-0.5 sm:py-1 border-blue-800 border-1 sm:border-2 rounded-lg sm:rounded-xl bg-blue-400 text-xs sm:text-sm">
                        <span>Edit password</span>
                        <lord-icon
                            src="https://cdn.lordicon.com/cbtlerlm.json"
                            trigger="hover"
                            state="hover-line"
                            stroke="bold"
                            className="w-[20px] sm:w-[25px]"
                        >
                        </lord-icon>
                    </div>
                    <div onClick={() => { handleDelete(id) }} className="cursor-pointer flex justify-center items-center px-1 sm:px-2 py-0.5 sm:py-1 border-red-800 border-1 sm:border-2 rounded-lg sm:rounded-xl bg-red-400 text-xs sm:text-sm">
                        <span>Delete Password</span>
                        <lord-icon
                            src="https://cdn.lordicon.com/sxhqklqh.json"
                            trigger="hover"
                            stroke="bold"
                            className="w-[20px] sm:w-[25px]"
                        >
                        </lord-icon>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
