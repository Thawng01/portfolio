import "./header.css";

const menu = ["Work", "About", "Service", "Contact"];

const Header = () => {
    return (
        <div className="header">
            {menu.map((m, i) => (
                <ul key={i} className="menu-container">
                    <li className="menu-item">{m}</li>
                </ul>
            ))}
        </div>
    );
};

export default Header;
