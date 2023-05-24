import { MENU } from "../data";

const Header = ({ onClick }) => {
    return (
        <div className="bg-white hidden md:block fixed w-screen z-40 h-14">
            <div className="flex items-center h-full pr-8">
                <div className=" hidden md:flex">
                    {MENU.map((m) => (
                        <ul
                            className=" mx-4 px-3 py-1 rounded-md cursor-pointer hover:bg-sky-600 hover:text-white transition-all duration-500"
                            key={m}
                            onClick={() => onClick(m)}
                        >
                            <li className="font-serif text-md ">{m}</li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
