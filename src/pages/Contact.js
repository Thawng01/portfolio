import { useRef } from "react";
import "./contact.css";

const Contact = () => {
    const nameRef = useRef();
    const emailRef = useRef();

    const handleFocus = (e) => {
        const { type } = e.target;

        if (type === "text") {
            nameRef?.current?.classList.add("move-placeholder-up");
        }

        if (type === "email") {
            emailRef?.current?.classList.add("move-placeholder-up");
        }
    };

    const handleBlur = (e) => {
        const { type, value } = e.target;

        if (type === "text") {
            if (value === "") {
                nameRef?.current?.classList.remove("move-placeholder-up");
            }
        }

        if (type === "email") {
            if (value === "") {
                emailRef?.current?.classList.remove("move-placeholder-up");
            }
        }
    };

    return (
        <div className="contact">
            <form className="contact-container">
                <div className="form-group">
                    <span ref={nameRef} className="placeholder">
                        Your name
                    </span>
                    <input
                        type="text"
                        className="contact-input"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="form-group">
                    <span ref={emailRef} className="placeholder">
                        Your Email
                    </span>
                    <input
                        type="email"
                        className="contact-input"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </div>

                <textarea rows={15} className="contact-input-message" />

                <button type="submit" className="contact-submit-btn">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
