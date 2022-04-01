const Footer = () => {
    return (
        <div className="bg-slate-900">
            <div className="mx-auto container grid grid-cols-5 px-16 pt-12 pb-16">
                <div className="col-span-6 lg:col-span-3 pb-10 lg:pb-0">
                    <div className="flex flex-row justify-center lg:justify-start space-x-5">
                        <button href="#" className="rounded-xl border-orange-400 border-2 bg-orange-400 py-4 px-5 text-sm font-bold text-white shadow-sm duration-300 hover:translate-y-1">
                            Try it for free
                        </button>
                        <button href="#" className="rounded-xl py-4 pl-5 pr-3.5 text-sm font-medium border-2 border-white text-white flex flex-row items-center duration-300 hover:translate-y-1">
                            Watch how it works
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2.6}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 lg:col-span-1 flex flex-col items-center lg:items-start space-y-6 pb-10 lg:pb-0">
                    <p className="text-sm font-medium text-white leading-8 pb-2">Resources</p>
                    <a href="https://www.pixeltrue.com/free-packs/lined-illustrations" target="_blank" className="text-sm text-slate-400">Illustrations</a>
                    <a href="https://heroicons.com/" target="_blank" className="text-sm text-slate-400">Icons</a>
                </div>
                <div className="col-span-5 lg:col-span-1 flex flex-col items-center lg:items-start space-y-6">
                    <p className="text-sm font-medium text-white leading-8 pb-2">Source</p>
                    <a href="https://github.com/Lewwiss/react-tailwind-showcase" target="_blank" className="text-sm text-slate-400">Github</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;