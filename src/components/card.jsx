
import { useState } from "react";

const Card = ({ siteName, siteNote, siteID, sitePassword }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="bg-slate-900 grid grid-rows-1 grid-cols-2 justify-around ml-2 mr-10 border-2 border-blue-500 rounded-lg p-4 my-5 m-2 text-white hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200 relative">
            <div className="flex justify-between items-start mb-3">
                <div>
                    <div className="flex justify-center items-center gap-2">
                        <h3 className="text-blue-400 text-xl font-semibold">Site Name : <a className="capitalize " href={"https://"+siteName} target="_blank">{siteName}</a></h3> {/* buz Google.com and google.com are same*/}
                    </div>
                    <p className="text-gray-300 text-sm">Note : {siteNote}</p>
                </div>
            </div>
            <div className="space-y-2">
                <div className="flex items-center">
                    <span className="text-blue-400 font-semibold mr-2">ID:</span>
                    <span className="text-white">{siteID}</span>
                </div>
                <div className="flex items-center">
                    <span className="text-blue-400 font-semibold mr-2">Password:</span>
                    <span className="text-white mr-2">{showPassword ? sitePassword : "*********"}</span>
                    <button
                        className="px-2 py-1 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded transition-colors duration-200"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
