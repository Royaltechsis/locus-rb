import { Outlet, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:text-white transition-colors">
                            LOCUS_RB
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <NavLink to="/" active={isActive('/')}>_HOME</NavLink>
                            <NavLink to="/agenda" active={isActive('/agenda')}>_AGENDA</NavLink>
                            <NavLink to="/tickets" active={isActive('/tickets')}>_ACCESS_TOKEN</NavLink>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <Link
                            to="/tickets"
                            className="px-4 py-2 bg-primary/10 border border-primary/50 text-primary rounded font-mono text-sm font-bold shadow-[0_0_10px_rgba(0,240,255,0.2)] backdrop-blur-sm active:scale-95 transition-all"
                        >
                            &lt;ACCESS /&gt;
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

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
