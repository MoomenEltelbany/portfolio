import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SkillsItem } from "../components";

function About() {
    return (
        <main className="bg-slate-900 p-10 text-slate-400 text-center h-full">
            <section>
                <div>
                    <h3 className="text-[28px] font-bold text-slate-100">
                        Front-End
                    </h3>
                    <h3 className="text-[40px] font-bold text-slate-100">
                        React Developer
                    </h3>
                    <p className="text-lg">
                        Hi, I'm Moomen ELtelbany. A passionate Front-end React
                        Developer based in Cairo,Egypt. 📍
                    </p>
                </div>
                <div className="mt-7">
                    <h3 className="text-[28px] font-bold text-slate-100">
                        About Me
                    </h3>
                    <p className="text-lg tracking-wide max-w-[800px] mx-auto text-center">
                        I'm a self-taught Front-End Developer specializing in
                        HTML, CSS, JavaScript, React, and Tailwind CSS. While
                        I'm early in my career, I'm committed to writing clean,
                        maintainable code and building responsive websites that
                        work smoothly across all devices. I'm actively building
                        my portfolio with real projects and I'm eager to bring
                        value to clients who need reliable, modern web
                        solutions. I learn fast, communicate clearly, and I'm
                        ready to prove myself.
                    </p>
                </div>
            </section>
            <section className="mt-7 flex flex-col items-center">
                <h3 className="text-[28px] text-slate-100">Tech Stack</h3>
                <ul className="flex justify-start items-start gap-4 text-[28px] mt-4">
                    <SkillsItem
                        icon={FaHtml5}
                        color="text-red-400"
                        shadow="red"
                    />
                    <SkillsItem
                        icon={FaCss3Alt}
                        color="text-blue-500"
                        shadow="blue"
                    />
                    <SkillsItem
                        icon={RiTailwindCssFill}
                        color="text-blue-400"
                        shadow="blue"
                    />
                    <SkillsItem
                        icon={TbBrandJavascript}
                        color="text-yellow-400"
                        shadow="yellow"
                    />
                    <SkillsItem
                        icon={FaReact}
                        color="text-cyan-400"
                        shadow="cyan"
                    />
                    <SkillsItem
                        icon={FaGitAlt}
                        color="text-orange-500"
                        shadow="orange"
                    />
                </ul>
            </section>
        </main>
    );
}

export default About;
