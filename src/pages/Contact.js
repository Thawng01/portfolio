import { useRef, useState, forwardRef } from "react";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import SocialIcon from "../components/SocialIcon";
import DirectContact from "../components/DirectContact";
import Input from "../components/Input";
import Message from "../components/Message";

const Contact = forwardRef((props, ref) => {
    const [loading, setLoading] = useState(false);
    const [infoMessage, setInfoMessage] = useState(null);
    const [messages, setMessages] = useState({
        subject: "",
        email: "",
        text: "",
    });

    const form = useRef();

    const handleMessages = (e) => {
        const { name, value } = e.target;
        e.target.style.border = "";
        setMessages((prev) => ({ ...prev, [name]: value }));
        setInfoMessage(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!messages.subject) {
            e.target.subject.style.borderBottom = "1.5px solid red";
            setInfoMessage({
                text: "Subject field must not be empty.",
                type: "error",
            });
            return;
        }

        if (!messages.email) {
            e.target.email.style.borderBottom = "1.5px solid red";
            setInfoMessage({
                text: "Email field must not be empty.",
                type: "error",
            });
            return;
        }

        if (!messages.text) {
            e.target.text.style.border = "1.5px solid red";
            setInfoMessage({
                text: "Message field must not be empty.",
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
                setLoading(false);
                setMessages("");
                setInfoMessage({
                    text: "Message field must not be empty.",
                    type: "success",
                });
            })
            .catch(() => {
                setLoading(false);
                setInfoMessage({
                    text: "Something went wrong.",
                    type: "error",
                });
            });
    };

    return (
        <section
            ref={ref}
            className="flex items-center mb-[65px] md:mb-0 flex-col py-6"
        >
            <motion.h2
                initial={{ x: -200 }}
                whileInView={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100, duration: 0.6 }}
                className="dark:text-white font-bold text-center text-lg py-3"
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
                    className="lg:flex-1 flex-col"
                >
                    <p className="mb-10 font-bold text-lg text-center dark:text-white">
                        Let's discuss your project
                    </p>
                    <DirectContact
                        title="Call me"
                        icon={<IoLogoWhatsapp />}
                        link="https://wa.me/959772188985"
                        color="text-whatsapp"
                    />
                    <DirectContact
                        title="Message me"
                        icon={<MdEmail />}
                        link="mailto:thechinpress@gmail.com"
                        color="text-[#db2777]"
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
                    {infoMessage && <Message message={infoMessage} />}
                    <Input
                        value={messages.subject}
                        placeholder="Subject"
                        name="subject"
                        type="text"
                        onChange={handleMessages}
                    />

                    <Input
                        value={messages.email}
                        placeholder="Your email"
                        name="email"
                        type="email"
                        onChange={handleMessages}
                    />

                    <textarea
                        className="dark:text-light dark:bg-dark my-2 border dark:border-[#a6a6a6] resize-none w-full rounded-sm p-2.5 focus:outline-0"
                        rows={8}
                        name="text"
                        value={messages.text}
                        placeholder="Your message"
                        onChange={handleMessages}
                    />

                    <button
                        disabled={loading ? true : false}
                        type="submit"
                        className="bg-primary hover:bg-darkPrimary w-full text-[white] text-md rounded-sm mt-2.5 py-2 "
                        style={{ cursor: loading ? "not-allowed" : "pointer" }}
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </motion.form>
            </div>
            <SocialIcon />
        </section>
    );
});

export default Contact;
