import { useEffect, useRef, useState, forwardRef } from "react";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import Modal from "../components/Modal";
import "./contact.css";

const Contact = forwardRef((props, ref) => {
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [visible, setVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const nameRef = useRef();
    const emailRef = useRef();
    const form = useRef();

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
            .catch(() => {
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
        <div ref={ref} className="flex items-center flex-col">
            <Modal visible={visible} info={modalMessage} />
            <motion.h2
                initial={{ y: -100 }}
                whileInView={{ y: 0 }}
                transition={{ type: "spring", stiffness: 90, duration: 0.6 }}
                className="font-bold font-serif text-center text-lg py-3"
            >
                CONTACT
            </motion.h2>
            <div className="flex justify-between flex-col lg:flex-row items-center lg:w-5/6 mx-auto p-2">
                <motion.div
                    initial={{ x: -150 }}
                    whileInView={{ x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 90,
                        duration: 0.7,
                    }}
                    viewport={{ once: true }}
                    className="flex lg:flex-1 flex-col"
                >
                    <p className="mb-10 font-bold font-serif text-xl text-center">
                        Let's discuss your project
                    </p>
                    <div className="flex items-center justify-center mb-8">
                        <IoLogoWhatsapp className="text-xl text-green-700 mr-2" />
                        <span className="font-serif text-md">Call me</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <MdEmail className="text-xl text-pink-600 mr-2" />
                        <a
                            href="mail:thechinpress@gmail.com"
                            className="font-serif text-md"
                        >
                            Message me
                        </a>
                    </div>
                </motion.div>
                <motion.form
                    initial={{ x: 150 }}
                    whileInView={{ x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 90,
                        duration: 0.7,
                    }}
                    viewport={{ once: true }}
                    className="flex w-full lg:flex-1 flex-col p-3"
                    ref={form}
                    onSubmit={handleSubmit}
                >
                    <div className="relative my-6 bg-blue-300">
                        <span
                            ref={nameRef}
                            className="text-gray-400 absolute left-1.5 bottom-1"
                        >
                            Subject
                        </span>
                        <input
                            className="w-full border-b border-gray-500 text-md focus:outline-0 px-2 py-1 focus:border-b focus:border-gray-500"
                            type="text"
                            name="subject"
                            value={subject}
                            onChange={handleSubjectChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="relative my-6 ">
                        <span
                            ref={emailRef}
                            className="text-gray-400 absolute left-1.5 bottom-1"
                        >
                            Your Email
                        </span>
                        <input
                            className="w-full border-b border-gray-500 text-md focus:outline-0 px-2 py-1 focus:border-b focus:border-gray-500"
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>

                    <textarea
                        className="border border-gray-500 resize-none w-full rounded-md p-2.5 focus:outline-0 focus:border focus:border-gray-800"
                        rows={10}
                        name="message"
                        value={message}
                        placeholder="Your message..."
                        onChange={handleMessageChange}
                    />

                    <button
                        disabled={loading ? true : false}
                        type="submit"
                        className="bg-sky-600 w-full text-white text-md font-serif rounded-md mt-2.5 py-2 "
                        style={{ cursor: loading ? "not-allowed" : "pointer" }}
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </motion.form>
            </div>
        </div>
    );
});

export default Contact;
