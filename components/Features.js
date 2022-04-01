const Features = () => {
    return (
        <div className="mx-auto container pt-20 pb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-400 pb-7 text-center">Amazing features</p>
            <h2 className="font-bold text-5xl text-slate-800 text-center leading-tight">See what you can do</h2>
            <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 pt-20 md:pt-6">
                <div className="flex items-center justify-center">
                    <img src="/images/2.svg" className="w-full p-10 sm:p-0 sm:w-80 lg:w-96" />
                </div>
                <div className="flex flex-col text-center md:text-left items-center md:items-start justify-center p-16">
                    <h1 className="font-bold text-4xl text-slate-800 leading-normal">Share files at the<br className="hidden lg:block"/> same time</h1>
                    <p className="text-sm text-slate-600 leading-9 pt-8 pb-9">We're a growing family of 382,322 designers and<br className="hidden lg:block"/> developers from around the world</p>
                    <button href="#" className="rounded-xl py-4 pl-5 pr-3.5 text-sm font-bold border-2 border-slate-900 text-slate-900 flex flex-row items-center duration-300 hover:translate-x-1">
                        Watch how it works
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#0f172a" strokeWidth={2.6}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Features;