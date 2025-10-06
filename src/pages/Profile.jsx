import TextType from "../components/ui/TextType";
import Cubes from "../components/ui/Cubes";
import { NavLink } from "react-router-dom";

export default function Profile() {
    return (
        <main className="p-10 bg-slate-900 flex flex-col justify-center items-start h-full text-[50px] relative">
            <p className="absolute text-[70px] md:text-[100px] z-0 top-[-10px] left-0 text-[#042341]/80 font-extrabold text-center uppercase">
                Love building websites
            </p>
            <TextType
                text={["Moomen Eltelbany"]}
                typingSpeed={150}
                pauseDuration={1500}
                showCursor={false}
                loop={false}
                cursorCharacter="|"
                hideCursorWhileTyping="false"
                textColors={["oklch(70.4% 0.04 256.788)"]}
                className="relative z-10"
            />
            <TextType
                text={["Front-end Developer", "Creating websites for fun 😍"]}
                typingSpeed={100}
                pauseDuration={1500}
                showCursor={true}
                loop={true}
                cursorCharacter="|"
                textColors={["oklch(44.6% 0.043 257.281)"]}
                className="text-[40px] mb-10 relative z-10"
            />
            <div className="text-white text-sm flex gap-2">
                <NavLink
                    to="/projects"
                    className="bg-slate-800 py-2 px-3 text-lg rounded-2xl hover:bg-slate-400 hover:text-slate-900 transition-all duration-200"
                >
                    See my work
                </NavLink>
                <NavLink
                    to="../../public/resume.pdf"
                    download="resume.pdf"
                    className="bg-slate-800 py-2 px-3 text-lg rounded-2xl hover:bg-slate-400 hover:text-slate-900 transition-all duration-200"
                    target="_blank"
                >
                    Download my CV
                </NavLink>
            </div>
            <div className="fixed z-0 bottom-11 right-11 h-[26rem] w-[26rem] hidden md:flex justify-end items-end">
                <Cubes
                    gridSize={8}
                    maxAngle={90}
                    radius={4}
                    borderStyle="2px dashed #8FA1B9"
                    faceColor="#042341"
                    rippleColor="#ff6b6b"
                    rippleSpeed={1.5}
                    autoAnimate={true}
                    rippleOnClick={true}
                />
            </div>
        </main>
    );
}
