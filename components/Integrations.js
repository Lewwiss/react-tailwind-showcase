const Integrations = () => {
    return (
        <div className="mx-auto container pt-16 pb-20">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 pb-9 text-center">Amazing features</p>
            <h2 className="font-bold text-5xl text-slate-800 text-center">Powerful integrations</h2>
            <div className="mx-auto max-w-6xl grid grid-cols-2 pt-10">
                <div className="flex items-center justify-center">
                    <img src="/images/3.svg" width={400} />
                </div>
                <div className="flex flex-col items-start justify-center p-16">
                    <h1 className="font-bold text-4xl text-slate-800 leading-tight">Stay focused<br />wherever you are</h1>
                    <p className="text-sm text-slate-500 leading-9 py-9">We're a growing family of 382,322 designers and<br />developers from around the world</p>
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

export default Integrations;