import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isActive = (path: string) => location.pathname === path;

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 z-50">
                        <Link to="/" className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:text-white transition-colors">
                            LOCUS_RB
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <NavLink to="/" active={isActive('/')}>_HOME</NavLink>
                            <NavLink to="/agenda" active={isActive('/agenda')}>_AGENDA</NavLink>
                            <NavLink to="/partners" active={isActive('/partners')}>_PARTNERS</NavLink>
                            <NavLink to="/tickets" active={isActive('/tickets')}>_ACCESS_TOKEN</NavLink>
                        </div>
                    </div>

                    {/* Mobile Menu Button (Hamburger) */}
                    <div className="md:hidden z-[70]">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-primary focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 relative flex flex-col justify-between">
                                <span className={`block w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                                <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                                <span className={`block w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                            </div>
                        </button>
                    </div>

                    {/* Mobile Menu Overlay */}
                    <div className={`fixed inset-0 h-screen w-screen bg-black/95 backdrop-blur-xl z-[60] md:hidden transition-all duration-300 ease-in-out flex flex-col items-center justify-center ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                        <div className="flex flex-col items-center justify-center space-y-8 p-8 w-full">
                            <MobileNavLink to="/" isActive={isActive('/')}>_HOME</MobileNavLink>
                            <MobileNavLink to="/agenda" isActive={isActive('/agenda')}>_AGENDA</MobileNavLink>
                            <MobileNavLink to="/partners" isActive={isActive('/partners')}>_PARTNERS</MobileNavLink>
                            <MobileNavLink to="/tickets" isActive={isActive('/tickets')}>_ACCESS_TOKEN</MobileNavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const MobileNavLink = ({ to, children, isActive }: { to: string; children: React.ReactNode; isActive: boolean }) => (
    <Link
        to={to}
        className={`text-2xl font-mono font-bold transition-all duration-300 ${isActive
            ? 'text-primary scale-110'
            : 'text-textMuted hover:text-white'
            }`}
    >
        {children}
    </Link>
);

const NavLink = ({ to, children, active }: { to: string; children: React.ReactNode; active: boolean }) => (
    <Link
        to={to}
        className={`px-3 py-2 rounded-md text-sm font-mono font-medium transition-all duration-300 ${active
            ? 'text-primary bg-primary/10 border border-primary/20 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
            : 'text-textMuted hover:text-white hover:bg-white/5'
            }`}
    >
        {children}
    </Link>
);

const Footer = () => (
    <footer className="bg-surface border-t border-white/5 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-textMuted font-mono text-sm">
                &copy; {new Date().getFullYear()} Locus Rant & Code. <span className="text-primary">System.exit(0)</span>
            </p>
        </div>
    </footer>
);

export const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background text-textMain">
            <Navbar />
            <main className="flex-grow pt-16">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
