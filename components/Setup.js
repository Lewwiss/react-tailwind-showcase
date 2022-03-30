const Step = ({step, title}) => {
    return (
        <div className="flex flex-col items-center cursor-pointer">
            <div className="pb-8">
                <div className="bg-slate-200 rounded-full w-28 h-28 shadow-sm flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#94a3b8" strokeWidth={1.6}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
            </div>
            <div className="bg-orange-400 px-4 py-2.5 rounded-full">
                <p className="text-xs font-medium text-white">Step {step}</p>
            </div>
        </div>
    );
};

const Setup = () => {
    return (
        <div className="mx-auto container pt-24 pb-20">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 pb-9 text-center">Instant setup</p>
            <h2 className="font-bold text-5xl text-slate-800 text-center">Fast, simple & effortless</h2>
            <div className="mx-auto max-w-5xl grid grid-cols-4 pt-16">
                <Step step="1" title="Download the app" />
                <Step step="2" title="Invite teammates" />
                <Step step="3" title="Create workspace" />
                <Step step="4" title="Track performance" />
            </div>
        </div>
    );
};

export default Setup;