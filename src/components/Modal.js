import "./modal.css";

const Modal = ({ visible, info }) => {
    return (
        <div
            className="modal"
            style={{
                top: visible ? 30 : -10,
                opacity: visible ? 1 : 0.4,
                transform: visible ? "scale(1)" : "scale(0)",
            }}
        >
            <span
                className="modal-message"
                style={{
                    color: info?.type === "error" ? "red" : "green",
                }}
            >
                {info?.text}
            </span>
        </div>
    );
};

export default Modal;
