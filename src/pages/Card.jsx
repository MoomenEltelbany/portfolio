import { useNavigate } from "react-router-dom";
import image from "../assets/images/profile-photo.png";
import ProfileCard from "../components/ui/ProfileCard";

function About() {
    const navigate = useNavigate();

    return (
        <main className="bg-slate-900 h-dvh flex justify-center items-center">
            <section className="bg-slate-900">
                <div className="bg-slate-900">
                    <ProfileCard
                        name="Moomen ELtelbany"
                        title="Front-End Developer"
                        handle="Moomen"
                        status="Open to work"
                        contactText="Contact Me"
                        showBehindGradient={true}
                        avatarUrl={image}
                        showUserInfo={true}
                        enableTilt={true}
                        enableMobileTilt={false}
                        onContactClick={() => navigate("/contact")}
                        className="bg-slate-900"
                    />
                </div>
            </section>
        </main>
    );
}

export default About;
