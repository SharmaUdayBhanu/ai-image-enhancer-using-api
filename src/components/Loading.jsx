import React from "react";

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-80">
            <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 border-4 border-transparent border-t-indigo-400 border-r-purple-500 rounded-full animate-spin"></div>
                </div>
                <div className="text-indigo-300 text-sm mt-24 text-center animate-pulse">
                    AI is working its magic...
                </div>
            </div>
        </div>
    );
};

export default Loading;