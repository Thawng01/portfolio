import { useEffect, useRef, useState, forwardRef } from "react";

import emailjs from "@emailjs/browser";

import "./contact.css";
import useAnimation from "../hook/useAnimation";
import Modal from "../components/Modal";
import ContactInfo from "../components/ContactInfo";

const Contact = forwardRef((props, ref) => {
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [visible, setVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const nameRef = useRef();
    const emailRef = useRef();
    const containerRef = useRef();
    const form = useRef();
    useAnimation(containerRef, 1200);

    const handleSubjectChange = (e) => setSubject(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);

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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!subject || !email || !message) {
            setVisible(true);
            setModalMessage({
                text: "Please fill all the fields",
                type: "error",
            });
            return;
        }

        setLoading(true);
        emailjs
            .sendForm(
                "service_d3ib5co",
                "template_ijpkjwn",
                form.current,
                "GOZvhOOmct4sq9JXo"
            )
            .then(() => {
                setVisible(true);
                setLoading(false);
                setModalMessage({
                    text: "You have sent message successfully.",
                    type: "success",
                });
                setSubject("");
                setEmail("");
                setMessage("");
            })
            .catch((error) => {
                setVisible(true);
                setLoading(false);
                setModalMessage({ text: "Something failed.", type: "error" });
            });
    };

    useEffect(() => {
        if (visible) {
            setTimeout(() => setVisible(false), 2000);
        }
    }, [setVisible, visible]);

    return (
        <div ref={ref} className="contact">
            <Modal visible={visible} info={modalMessage} />
            <h2 className="contact-title">CONTACT</h2>
            <div ref={containerRef} className="contact-container item">
                <ContactInfo />
                <form
                    ref={form}
                    className="contact-right-container"
                    onSubmit={handleSubmit}
                >
                    <div className="form-group">
                        <span ref={nameRef} className="placeholder">
                            Subject
                        </span>
                        <input
                            type="text"
                            name="subject"
                            className="contact-input"
                            value={subject}
                            onChange={handleSubjectChange}
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
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="contact-input"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>

                    <textarea
                        rows={10}
                        name="message"
                        value={message}
                        onChange={handleMessageChange}
                        className="contact-input-message"
                    />

                    <button
                        disabled={loading ? true : false}
                        type="submit"
                        className="contact-submit-btn"
                        style={{ cursor: loading ? "not-allowed" : "pointer" }}
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>
        </div>
    );
});

export default Contact;
