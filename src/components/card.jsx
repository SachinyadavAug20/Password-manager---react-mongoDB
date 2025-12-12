import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const Card = ({ siteName, siteNote, siteID, sitePassword, setPasswordArray, id, passwordArray, SetSiteID, SetSiteName, SetSiteNote, SetSitePassword }) => {
    const [showPassword, setShowPassword] = useState(false);
    const copyText = (sitePassword) => {
        navigator.clipboard.writeText(sitePassword)
    }
    const handleDelete = (uuid) => {

        if (confirm("Are you sure ?")) {
            console.log("deleting uuid", uuid);
            setPasswordArray(passwordArray.filter((item) => {
                return item.id != uuid;
            }))
            localStorage.setItem("Passwords", JSON.stringify(passwordArray.filter((item) => {
                return item.id != uuid;
            })))
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
    const handleEdit = (uuid) => {
        SetSitePassword(sitePassword)
        SetSiteNote(siteNote)
        SetSiteName(siteName)
        SetSiteID(siteID)
        // handleDelete(uuid);
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
            <div className="bg-slate-900 snap-center flex flex-col sm:grid sm:grid-rows-1 sm:grid-cols-5 justify-around mx-2 sm:ml-2 sm:mr-10 border-2 border-blue-500 rounded-lg p-2 sm:p-4 my-2 sm:my-4 text-white hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200 relative">

                {/* Left Column - Site Info */}
                <div className="flex flex-col justify-between items-start mb-4 sm:mb-3">
                    <div>
                        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-1 sm:gap-2 mb-2">
                            <h3 className="text-blue-400 text-base sm:text-lg font-semibold">Site Name:</h3>
                            <a
                                className="capitalize text-white text-base sm:text-lg break-all hover:underline"
                                href={"https://" + siteName}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {siteName}
                            </a>
                        </div>
                        <p className="text-gray-300 text-sm">
                            <span className="text-blue-400">Note:</span> {siteNote}
                        </p>
                    </div>
                </div>

                {/* Right Column - ID and Password */}
                <div className="space-y-2 sm:space-y-3 col-span-3">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
                        <span className="text-blue-400 font-semibold mr-2 text-sm sm:text-base">ID:</span>
                        <span className="text-white text-sm sm:text-base break-all">{siteID}</span>
                    </div>
                    <div className="relative flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
                        <div className="flex items-center">
                            <span className="text-blue-400 font-semibold mr-2 text-sm sm:text-base">Password:</span>
                            <span className="text-white mr-2 text-sm sm:text-base break-all">
                                {showPassword ? sitePassword : "*********"}
                            </span>
                        </div>
                        <div className="flex justify-center items-center gap-3">
                            <div className="cursor-pointer w-full sm:w-auto mt-1 sm:mt-0" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <lord-icon
                                    src="https://cdn.lordicon.com/knitbwfa.json"
                                    trigger="hover"
                                    state="hover-look-around"
                                >
                                </lord-icon> : <lord-icon
                                    src="https://cdn.lordicon.com/knitbwfa.json"
                                    state="hover-lashes"
                                    trigger="hover"
                                >
                                </lord-icon>}
                            </div>
                            <div className="cursor-pointer w-full sm:w-auto mt-1 sm:mt-0" onClick={() => { copyText(sitePassword) }}>
                                <lord-icon
                                    src="https://cdn.lordicon.com/tbabdzcy.json"
                                    trigger="hover">
                                </lord-icon>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex gap-1 flex-col">
                    <div onClick={() => { handleEdit(id) }} className="cursor-pointer flex justify-center items-center py-0.5 border-blue-800 border-2 rounded-xl bg-blue-400 ">
                        <span>Edit password</span>
                        <lord-icon
                            src="https://cdn.lordicon.com/cbtlerlm.json"
                            trigger="hover"
                            state="hover-line"
                            stroke="bold"
                        >
                        </lord-icon>
                    </div>
                    <div onClick={() => { handleDelete(id) }} className="cursor-pointer flex justify-center items-center py-0.5 border-red-800 border-2 rounded-xl bg-red-400 ">
                        <span>Delete Password</span>
                        <lord-icon
                            src="https://cdn.lordicon.com/sxhqklqh.json"
                            trigger="hover"
                            stroke="bold"
                        >
                        </lord-icon>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
