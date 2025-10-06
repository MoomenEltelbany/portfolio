import ContactForm from "../features/contactForm/ContactForm";

const SOCIALS = [
    {
        number: 2,
        label: "email: ",
        text: "moomenmohamed4@gmail.com",
        link: "mailto:moomenmohamed4@gmail.com?subject=Portfolio Inquiry",
    },
    {
        number: 3,
        label: "github: ",
        text: "MoomenEltelbany",
        link: "https://github.com/MoomenEltelbany?tab=repositories",
    },
    {
        number: 4,
        label: "Linkedin: ",
        text: "Moomen Eltelbany",
        link: "https://www.linkedin.com/in/moomen-eltelbany/",
    },
];

function Contact() {
    return (
        <main className="bg-slate-900 h-full px-4 py-8 sm:px-6 md:px-10">
            <h3 className="uppercase text-slate-100 text-2xl sm:text-3xl tracking-wide">
                Reach Out Via Socials
            </h3>
            <div className="text-slate-400 text-xl sm:text-2xl flex items-center mt-4">
                <span>1</span>
                <p className="ml-4">.socials {`{`}</p>
            </div>
            {SOCIALS.map((social) => {
                return (
                    <div
                        key={social.number}
                        className="text-slate-400 text-xl sm:text-2xl flex items-center"
                    >
                        <span>{social.number}</span>
                        <p className="ml-6 sm:ml-12">
                            {social.label}
                            <a
                                href={social.link}
                                target="_blank"
                                className=" hover:text-slate-300 underline"
                            >
                                {social.text}
                            </a>
                        </p>
                    </div>
                );
            })}

            <div className="text-slate-400 text-xl sm:text-2xl flex items-center">
                <span>5</span>
                <p className="ml-4">{`}`}</p>
            </div>

            {/* !TODO ADD THE REACT HOOK FORM */}
            <ContactForm />
        </main>
    );
}

export default Contact;
