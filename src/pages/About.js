import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
    return (
        <div ref={ref} className=" bg-slate-500 p-6">
            <div className="flex items-center flex-col md:flex-row lg:w-3/4 mx-auto">
                <div className="flex flex-1">
                    <img
                        src="/avatar.png"
                        alt=""
                        className="rounded-full w-72"
                    />
                </div>
                <div className="flex flex-1 flex-col p-3 ml-2 mt-3 md:m-0">
                    <h2 className="text-white text-center md:text-left font-bold mb-2 text-lg font-serif">
                        ABOUT ME
                    </h2>
                    <p className="text-md text-gray-100 font-serif">
                        I'm Thawng and MERN stack developer. I love coding and
                        helping others with my skill. Since having learned
                        coding for 2 years and half, and being confident, I just
                        started my journey as a freelance. I promise that I
                        would not make you disappointed.
                    </p>
                </div>
            </div>
        </div>
    );
});

export default About;
