import { useState, useEffect } from 'react';

const Navigation = () => {
    const [top, setTop] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset === 0) {
                setTop(true);
            } else {
                setTop(false);
            };
        });
    });

    return (
        <div className={`fixed z-50 w-full px-10 grid grid-cols-2 lg:grid-cols-3 duration-300 ${top ? "bg-transparent py-7" : "bg-slate-900 py-5"}`}>
            <div className="flex flex-row space-x-8 items-center justify-start">
                <div className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </div>
            </div>
            <div className="hidden lg:flex flex-row space-x-12 items-center justify-center">
                <a className="text-sm text-slate-400 cursor-pointer">About</a>
                <a className="text-sm text-slate-400 cursor-pointer">Downloads</a>
                <a className="text-sm text-slate-400 cursor-pointer">Pricing</a>
                <a className="text-sm text-slate-400 cursor-pointer">Features</a>
            </div>
            <div className="flex items-center justify-end space-x-8">
                <button href="#" className="rounded-xl border-orange-400 border-2 bg-orange-400 py-4 px-5 text-sm font-medium text-white shadow-sm duration-300 hover:translate-y-1">
                    Try it for free
                </button>
            </div>
        </div>
    );
};

export default Navigation;