import { MENU } from "../data";
import useScroll from "../hook/useScroll";

const Header = ({ onClick }) => {
    const activeClass = useScroll();
    return (
        <header className="bg-white dark:bg-dark hidden md:block fixed w-screen z-40 h-14">
            <nav className="flex items-center relative h-full pr-8">
                <ul className="flex">
                    {MENU.map((m) => (
                        <li
                            key={m.id}
                            onClick={() => onClick(m.title)}
                            className={`${
                                activeClass === m.title
                                    ? "bg-primary text-white"
                                    : ""
                            } mx-4 px-3 py-1 rounded-md cursor-pointer hover:bg-primary hover:text-white transition-all duration-500 `}
                        >
                            <p className="dark:text-white text-md">{m.title}</p>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
