
const events = [
    {
        time: '12:00 PM',
        title: '<Initialization />',
        category: 'Networking',
        description: 'Arrival, registration, and coffee. Connect with fellow nodes in the network.'
    },
    {
        time: '12:15 PM',
        title: 'Rant_Session_01',
        category: 'Rant',
        description: 'Quick open mic for tech grievances. Why does CSS center div still hurt? Let it out before the wars begin.'
    },
    {
        time: '12:30 PM',
        title: 'THE ROAST: CROSS-ROLE WARFARE',
        category: 'Debate',
        description: "We are breaking down the silos immediately. This is an unfiltered, moderated debate between the roles. Designers vs Devs vs PMs. It's therapy, but louder."
    },
    {
        time: '01:30 PM',
        title: 'THE GAUNTLET: VIBE CODING GAMES',
        category: 'Interactive',
        description: (
            <>
                The Main Event. Ditching keyboards for whiteboards.
                <br /><br />
                <strong>GAME 1: THE WHITEBOARD WAR (45 Mins)</strong><br />
                Squads sketch solutions for nightmare client briefs.
                <br /><br />
                <strong>GAME 2: DEFEND YOUR STACK (45 Mins)</strong><br />
                Volunteer a stack and defend it against the room's roast.
            </>
        )
    },
    {
        time: '03:00 PM',
        title: 'SYSTEM COOLDOWN & REFUEL',
        category: 'Break',
        description: 'Tools down. Refuel with snacks and drinks. Debrief on the arguments.'
    },
    {
        time: '03:30 PM',
        title: 'THE TRIBUNAL: OPEN MIC',
        category: 'Discussion',
        description: 'Final takeaways. We dissect the best arguments and worst solutions.'
    },
    {
        time: '04:00 PM',
        title: 'SHUTDOWN SEQUENCE',
        category: 'Networking',
        description: 'Final networking. Exchange handles. Official log off.'
    }
];

export const Agenda = () => {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-mono font-bold text-primary mb-2">&lt;Event_Schedule /&gt;</h1>
                <p className="text-textMuted">The sequence of operations for the day.</p>
            </div>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent opacity-30"></div>

                <div className="space-y-12">
                    {events.map((event, index) => (
                        <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center md:justify-between group`}>

                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full z-10 group-hover:scale-125 group-hover:bg-primary transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>

                            {/* Content Spacer for Desktop */}
                            <div className="hidden md:block w-5/12"></div>

                            {/* Content Card */}
                            <div className="w-full md:w-5/12 pl-12 md:pl-0">
                                <div className={`bg-surface p-6 rounded-lg border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                    <span className="inline-block px-2 py-1 mb-2 text-xs font-mono font-bold text-background bg-primary rounded">
                                        {event.time}
                                    </span>
                                    <h3 className="text-xl font-bold text-textMain mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                                    <p className="text-sm text-textMuted mb-2 font-mono uppercase tracking-wider text-secondary">{event.category}</p>
                                    <p className="text-textMuted/80 text-sm leading-relaxed">{event.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
