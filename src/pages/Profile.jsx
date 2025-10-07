import TextType from "../components/ui/TextType";
import Cubes from "../components/ui/Cubes";
import { NavLink } from "react-router-dom";

export default function Profile() {
    return (
        <main className="px-4 py-8 sm:px-6 md:px-10 bg-slate-900 flex flex-col justify-center items-start h-dvh text-[36px] sm:text-[44px] md:text-[50px] relative">
            <p className="absolute text-[48px] sm:text-[70px] md:text-[100px] z-0 top-[-10px] left-0 text-[#042341]/80 font-extrabold text-center uppercase">
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
                className="text-[28px] sm:text-[32px] md:text-[40px] mb-10 relative z-10"
            />
            <div className="text-white text-sm flex gap-2">
                <NavLink
                    to="/projects"
                    className="bg-slate-800 py-2 px-3 text-base sm:text-lg rounded-2xl hover:bg-slate-400 hover:text-slate-900 transition-all duration-200"
                >
                    See my work
                </NavLink>
                <a
                    href="/resume.pdf"
                    download="resume.pdf"
                    className="bg-slate-800 py-2 px-3 text-base sm:text-lg rounded-2xl hover:bg-slate-400 hover:text-slate-900 transition-all duration-200"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Download my CV
                </a>
            </div>
            <div className="fixed z-0 bottom-6 right-6 sm:bottom-8 sm:right-8 md:bottom-20 md:right-16 h-[18rem] w-[18rem] sm:h-[22rem] sm:w-[22rem] md:h-[26rem] md:w-[26rem] hidden md:flex justify-end items-end">
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
