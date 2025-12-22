import { useState } from 'react';

export const Partners = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        type: 'Partner',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };



    return (
        <div className="container mx-auto px-4 py-12 max-w-5xl">
            {/* Hero Section */}
            <div className="text-center mb-20">
                <h1 className="text-4xl md:text-6xl font-mono font-bold text-primary mb-6 tracking-tighter">
                    THE_NETWORK &gt;_
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    POWERING THE REALITY CHECK.
                </h2>
                <p className="text-textMuted text-lg max-w-3xl mx-auto leading-relaxed">
                    We don’t just take anyone’s logo. We partner exclusively with organizations that understand the value of unfiltered technical skill and are actively building the Port Harcourt tech ecosystem.
                    <br /><br />
                    These are the companies providing the fuel, the space, and the opportunities for the serious builders in our city.
                </p>
            </div>

            {/* Featured Partner Section */}
            <div className="mb-20">
                <div className="bg-surface p-1 border border-primary/30 rounded-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500"></div>
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all"></div>

                    <div className="relative z-10 p-8 md:p-12">
                        <span className="inline-block px-3 py-1 mb-6 text-xs font-mono font-bold text-background bg-primary rounded">
                            FEATURED_PARTNER
                        </span>

                        <div className="flex flex-col md:flex-row gap-10 items-center">
                            {/* Logo Placeholder */}
                            <div className="w-full md:w-1/3 flex justify-center">
                                <div className="w-48 h-48 bg-black/50 border border-white/10 rounded-xl flex items-center justify-center p-4">
                                    {/* Placeholder for InMotion Logo */}
                                    <img src="https://inmotion.ng/img/icon.svg" alt="InMotion ICT Logo" className="w-full h-full object-contain" />
                                </div>
                            </div>

                            <div className="w-full md:w-2/3 text-left">
                                <h3 className="text-3xl font-bold text-white mb-4">&gt;_ INMOTION ICT</h3>
                                <p className="text-secondary font-mono text-sm mb-4">Building the future, one line of code at a time.</p>

                                <p className="text-textMuted mb-6 leading-relaxed">
                                    InMotion ICT isn't just watching the ecosystem; they are actively building it. As a premier software development and digital transformation agency serving clients globally from Port Harcourt and Lagos, they understand the difference between just writing code and delivering real business value.
                                    <br /><br />
                                    They are powering this "Reality Check" because they believe in raising the bar for Nigerian technical talent and supporting spaces where real builders connect.
                                </p>

                                <a
                                    href="http://inmotion.ng/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-6 py-3 border border-primary text-primary font-mono font-bold rounded hover:bg-primary hover:text-background transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                                >
                                    VISIT THEIR WEBSITE &gt;
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Join The Network Section */}
            <div className="border-t border-white/10 pt-20 text-center">
                <h2 className="text-3xl font-mono font-bold text-primary mb-6">JOIN THE NETWORK &gt;_</h2>
                <p className="text-textMuted max-w-2xl mx-auto mb-10 leading-relaxed">
                    We still have limited slots available for fuel (energy drinks/snacks) and infrastructure partners who want to put their brand in front of 25+ filtered, high-competence tech professionals this Saturday.
                </p>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-block px-8 py-4 bg-surface border border-secondary text-secondary font-mono font-bold text-lg rounded hover:bg-secondary hover:text-white transition-all duration-300 cursor-pointer"
                >
                    APPLY TO PARTNER OR SPONSOR &gt;
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
                    <div className="bg-surface border border-primary/30 rounded-lg p-8 w-full max-w-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] relative animate-in fade-in zoom-in duration-200">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-textMuted hover:text-white font-mono text-xl"
                        >
                            [X]
                        </button>

                        <h3 className="text-2xl font-mono font-bold text-primary mb-6">&lt;Application_Node /&gt;</h3>

                        <form
                            action="https://formspree.io/f/xwvendgl"
                            method="POST"
                            className="space-y-4"
                        >
                            <div>
                                <label className="block text-sm font-mono text-textMuted mb-1">Entity Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full bg-background border border-white/10 rounded p-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="Your Name / Org Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-mono text-textMuted mb-1">Company / Organization</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    className="w-full bg-background border border-white/10 rounded p-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="Company Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-mono text-textMuted mb-1">Communication Channel</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full bg-background border border-white/10 rounded p-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="email@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-mono text-textMuted mb-1">Protocol Type</label>
                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleInputChange}
                                    className="w-full bg-background border border-white/10 rounded p-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                >
                                    <option value="Partner">Partner (Infrastructure/Logistics)</option>
                                    <option value="Sponsor">Sponsor (Financial Support)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-mono text-textMuted mb-1">Payload Data</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="w-full bg-background border border-white/10 rounded p-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                                    placeholder="Tell us how you want to support the ecosystem..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-primary/10 border border-primary text-primary font-mono font-bold rounded hover:bg-primary hover:text-background transition-all duration-300 mt-4"
                            >
                                TRANSMIT_APPLICATION()
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
