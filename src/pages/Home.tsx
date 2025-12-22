export const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Hero Section */}
            <section className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
                <div className="mb-6 relative inline-block group max-w-full">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-mono tracking-tighter break-words">
                        <span className="relative z-10">LOCUS_RANT_&_BUILD</span>
                        <span className="absolute top-0 left-0 -ml-1 text-primary opacity-50 animate-glitch hidden md:block" aria-hidden="true">LOCUS_RANT_&_BUILD</span>
                        <span className="absolute top-0 left-0 ml-1 text-secondary opacity-50 animate-glitch hidden md:block" style={{ animationDirection: 'reverse' }} aria-hidden="true">LOCUS_RANT_&_BUILD</span>
                    </h1>
                </div>

                <div className="h-8 md:h-12 overflow-hidden mb-8 w-full flex justify-center">
                    <p className="text-xs sm:text-xl md:text-3xl text-textMuted font-mono animate-typewriter whitespace-nowrap overflow-hidden border-r-2 border-primary w-fit">
                        &lt;Meetup for Tech. Rant. Code. Learn. /&gt;
                    </p>
                </div>

                <p className="text-base md:text-lg text-textMuted max-w-2xl mx-auto mb-10 leading-relaxed px-2">
                    The ultimate gathering for Developers, PMs, Designers, and tech enthusiasts.
                    Come for the <span className="text-primary font-bold">Coding Challenges</span>,
                    stay for the <span className="text-secondary font-bold">Rants</span>.
                </p>

                <div className="flex flex-col gap-4 justify-center items-center w-full px-4 md:px-0">
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full">
                        <a
                            href="/agenda"
                            className="w-full sm:w-auto inline-block px-8 py-4 bg-transparent border border-primary text-primary font-mono font-bold text-lg rounded hover:bg-primary hover:text-background transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)]"
                        >
                            EXECUTE_JOIN_PROTOCOL()
                        </a>
                        <a
                            href="/tickets"
                            className="w-full sm:w-auto inline-block px-8 py-4 bg-transparent border border-secondary text-secondary font-mono font-bold text-lg rounded hover:bg-secondary hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(191,0,255,0.3)] hover:shadow-[0_0_25px_rgba(191,0,255,0.6)]"
                        >
                            MINT_ACCESS_TOKEN()
                        </a>
                    </div>

                    <a
                        href="/partners"
                        className="text-textMuted hover:text-white font-mono text-sm underline decoration-primary/50 hover:decoration-primary transition-all mt-4 hover:translate-x-1"
                    >
                        &gt; BECOME_A_PARTNER_OR_SPONSOR
                    </a>
                </div>
            </section>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
        </div>
    );
};
