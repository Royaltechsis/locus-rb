import React, { useState } from 'react';

export const Tickets = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleGetTickets = () => {
        // Tix Integration
        const tixUrl = "https://tix.africa/YOUR_EVENT_URL_HERE";
        window.open(tixUrl, '_blank');
    };

    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-mono font-bold text-primary mb-4">&lt;Access_Token /&gt;</h1>
                <p className="text-textMuted">Secure your spot in the network.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Ticket Section */}
                <div className="bg-surface p-8 rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-500 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-primary/20"></div>

                    <h2 className="text-2xl font-bold text-white mb-2">Standard Node Access</h2>
                    <div className="text-4xl font-mono font-bold text-primary mb-6">₦5,000</div>

                    <ul className="space-y-4 mb-8 text-textMuted">
                        <li className="flex items-center">
                            <span className="text-secondary mr-2">✓</span> Full Event Access
                        </li>
                        <li className="flex items-center">
                            <span className="text-secondary mr-2">✓</span> Swag Pack (Stickers + Tee)
                        </li>
                        <li className="flex items-center">
                            <span className="text-secondary mr-2">✓</span> Food & Drinks
                        </li>
                        <li className="flex items-center">
                            <span className="text-secondary mr-2">✓</span> Rant Session Priority
                        </li>
                    </ul>

                    <button
                        onClick={handleGetTickets}
                        className="w-full py-4 bg-primary text-background font-bold font-mono rounded hover:bg-white hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                    >
                        GET_ACCESS_TOKEN()
                    </button>

                    <div className="mt-4 text-center">
                        <p className="text-xs text-textMuted font-mono">Secured by Tix.africa</p>
                    </div>
                </div>

                {/* Contact/Message Section */}
                <div className="bg-surface/50 p-8 rounded-xl border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-6">Transmit Message</h3>

                    <form
                         action="https://formspree.io/f/xwvendgl"
                        method="POST"
                        className="space-y-6"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-mono text-textMuted mb-2">UID (Name)</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full bg-background border border-white/10 rounded p-3 text-textMain focus:border-primary focus:outline-none focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all"
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-mono text-textMuted mb-2">Communication Link (Email)</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full bg-background border border-white/10 rounded p-3 text-textMain focus:border-primary focus:outline-none focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all"
                                placeholder="john@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-mono text-textMuted mb-2">Payload (Message)</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={4}
                                className="w-full bg-background border border-white/10 rounded p-3 text-textMain focus:border-primary focus:outline-none focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all"
                                placeholder="Query regarding..."
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 border border-secondary text-secondary font-mono font-bold rounded hover:bg-secondary hover:text-white transition-all duration-300"
                        >
                            SEND_TRANSMISSION
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
