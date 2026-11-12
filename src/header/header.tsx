
import { useEffect, useState } from 'react';
import { FaBars, FaEnvelope, FaFolderOpen, FaHome, FaTimes, FaUser } from 'react-icons/fa';
import TabIcon from '../assets/tabicon2.png';

const linkClass =
    'inline-flex items-center gap-2 m-0 rounded-lg px-3 py-2 text-[0.9rem] font-medium tracking-[0.1em] uppercase ' +
    'text-[#c9d0f5] no-underline cursor-pointer border-b-2 border-transparent ' +
    'transition-colors duration-200 ease-in hover:bg-[rgba(59,79,216,0.2)] hover:text-[#f4f6ff] hover:border-b-[#3b4fd8] ' +
    'max-[700px]:py-3';

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const updateActiveSection = () => {
            const activationPoint = window.innerHeight * 0.35;
            const sections = ['home', 'about', 'projects', 'contact']
                .map((id) => document.getElementById(id))
                .filter((section): section is HTMLElement => section !== null);

            const currentSection = sections.find((section) => {
                const bounds = section.getBoundingClientRect();
                return bounds.top <= activationPoint && bounds.bottom > activationPoint;
            });

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        updateActiveSection();
        window.addEventListener('scroll', updateActiveSection, { passive: true });
        window.addEventListener('resize', updateActiveSection);

        return () => {
            window.removeEventListener('scroll', updateActiveSection);
            window.removeEventListener('resize', updateActiveSection);
        };
    }, []);

    const getLinkClass = (section: string) =>
        `${linkClass} ${
            activeSection === section
                ? 'border-b-[#3b4fd8] bg-[rgba(59,79,216,0.3)] text-[#f4f6ff]'
                : ''
        }`;

    return (
        <header
            className="fixed top-0 left-0 w-full h-[68px] box-border z-[100] flex items-center px-10
                 bg-[rgba(5,10,46,0.88)] backdrop-blur-[8px]
                 border-b border-[rgba(143,156,240,0.28)]
                 shadow-[0_8px_24px_rgba(2,5,30,0.35)]
                 max-[700px]:px-4"
        >
            <h1 className="m-0 flex items-center gap-2 text-[1.4rem] font-bold tracking-[0.04em] text-[#f4f6ff] whitespace-nowrap max-[400px]:text-[1.1rem]">
                <img className="h-8 w-8 rounded-md object-cover" src={TabIcon} alt="" />
                Manman<span className="text-[#8f9cf0]">.dev</span>
            </h1>

            <nav
                id="primary-navigation"
                aria-label="Primary navigation"
                className={`ml-auto flex items-center justify-end gap-9 ${
                    menuOpen
                        ? 'max-[700px]:absolute max-[700px]:left-0 max-[700px]:right-0 max-[700px]:top-[68px] max-[700px]:flex max-[700px]:flex-col max-[700px]:items-stretch max-[700px]:gap-0 max-[700px]:border-b max-[700px]:border-[rgba(143,156,240,0.28)] max-[700px]:bg-[rgba(5,10,46,0.97)] max-[700px]:px-5 max-[700px]:py-2 max-[700px]:shadow-[0_8px_24px_rgba(2,5,30,0.35)]'
                        : 'max-[700px]:hidden'
                }`}
            >
                <p className="m-0">
                    <a href="#home" className={getLinkClass('home')} onClick={() => setMenuOpen(false)}>
                        <FaHome aria-hidden="true" />
                        home
                    </a>
                </p>
                <p className="m-0">
                    <a href="#about" className={getLinkClass('about')} onClick={() => setMenuOpen(false)}>
                        <FaUser aria-hidden="true" />
                        about
                    </a>
                </p>
                <p className="m-0">
                    <a href="#projects" className={getLinkClass('projects')} onClick={() => setMenuOpen(false)}>
                        <FaFolderOpen aria-hidden="true" />
                        projects
                    </a>
                </p>
                <p className="m-0">
                    <a href="#contact" className={getLinkClass('contact')} onClick={() => setMenuOpen(false)}>
                        <FaEnvelope aria-hidden="true" />
                        contact
                    </a>
                </p>
            </nav>

            <button
                type="button"
                className="ml-auto hidden h-11 w-11 items-center justify-center rounded-lg text-[#f4f6ff] transition hover:bg-[rgba(143,156,240,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8f9cf0] max-[700px]:inline-flex"
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
                aria-controls="primary-navigation"
                onClick={() => setMenuOpen((open) => !open)}
            >
                {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
            </button>
        </header>
    );
}