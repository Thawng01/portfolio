import { useEffect, useRef, useState, forwardRef } from "react";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import Modal from "../components/Modal";
import SocialIcon from "../components/SocialIcon";
import DirectContact from "../components/DirectContact";

const Contact = forwardRef((props, ref) => {
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [visible, setVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const form = useRef();

    const handleSubjectChange = (e) => setSubject(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);

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
        <div
            ref={ref}
            className="flex items-center mb-[65px] md:mb-0 bg-gray-700 flex-col py-6"
        >
            <Modal visible={visible} info={modalMessage} />
            <motion.h2
                initial={{ x: -200 }}
                whileInView={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100, duration: 0.6 }}
                className="font-bold font-serif text-center text-white text-lg py-3"
            >
                CONTACT
            </motion.h2>
            <div className="flex justify-between flex-col lg:flex-row items-center lg:w-5/6 mx-auto p-2">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        delay: 0.1,
                    }}
                    className="flex lg:flex-1 flex-col"
                >
                    <p className="mb-10 font-bold font-serif text-xl text-white text-center">
                        Let's discuss your project
                    </p>
                    <DirectContact
                        title="Call me"
                        icon={<IoLogoWhatsapp />}
                        link="https://wa.me/959772188985"
                        color="text-green-600"
                    />
                    <DirectContact
                        title="Message me"
                        icon={<MdEmail />}
                        link="mailto:thechinpress@gmail.com"
                        color="text-pink-600"
                    />
                </motion.div>
                <motion.form
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        delay: 0.3,
                    }}
                    className="flex w-full lg:flex-1 flex-col p-3"
                    ref={form}
                    onSubmit={handleSubmit}
                >
                    <div className=" my-2">
                        <input
                            className="w-full text-white border-none font-serif rounded-sm bg-gray-900 text-md focus:outline-0 p-2"
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={subject}
                            onChange={handleSubjectChange}
                        />
                    </div>
                    <div className=" my-2">
                        <input
                            className="w-full text-white border-none font-serif bg-gray-900 rounded-sm text-md focus:outline-0 p-2"
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>

                    <textarea
                        className="my-2 border-none text-white text-md font-serif bg-gray-900 resize-none w-full rounded-sm p-2.5 focus:outline-0"
                        rows={6}
                        name="message"
                        value={message}
                        placeholder="Your message"
                        onChange={handleMessageChange}
                    />

                    <button
                        disabled={loading ? true : false}
                        type="submit"
                        className="bg-sky-600 hover:bg-sky-700 w-full text-white text-md font-serif rounded-sm mt-2.5 py-2 "
                        style={{ cursor: loading ? "not-allowed" : "pointer" }}
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </motion.form>
            </div>
            <SocialIcon />
        </div>
    );
});

export default Contact;
