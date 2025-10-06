import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitMessage("");

        try {
            // Send email using EmailJS
            await emailjs.send(
                "service_84al2lp", // You'll get this from EmailJS
                "template_ryvscgm", // You'll get this from EmailJS
                {
                    from_name: data.name,
                    from_email: data.email,
                    subject: data.subject,
                    message: data.message,
                },
                "7XVRmC8Kq3pVQLDff" // You'll get this from EmailJS
            );

            setSubmitMessage("Message sent successfully! 🎉");
            reset();
        } catch (error) {
            setSubmitMessage("Oops! Something went wrong. Please try again.");
            console.error("Error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-lg mx-auto p-6 bg-slate-800 rounded-lg"
        >
            <h2 className="text-2xl text-white mb-6">Contact Me</h2>

            {/* Name Field */}
            <div className="mb-4">
                <label className="block text-white mb-2">Name</label>
                <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full p-2 rounded bg-slate-700 text-white"
                    placeholder="Your name"
                />
                {errors.name && (
                    <p className="text-red-400 text-sm mt-1">
                        {errors.name.message}
                    </p>
                )}
            </div>

            {/* Email Field */}
            <div className="mb-4">
                <label className="block text-white mb-2">Email</label>
                <input
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please enter a valid email",
                        },
                    })}
                    className="w-full p-2 rounded bg-slate-700 text-white"
                    placeholder="your.email@example.com"
                />
                {errors.email && (
                    <p className="text-red-400 text-sm mt-1">
                        {errors.email.message}
                    </p>
                )}
            </div>

            {/* Subject Field */}
            <div className="mb-4">
                <label className="block text-white mb-2">Subject</label>
                <input
                    {...register("subject", {
                        required: "Subject is required",
                    })}
                    className="w-full p-2 rounded bg-slate-700 text-white"
                    placeholder="What's this about?"
                />
                {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">
                        {errors.subject.message}
                    </p>
                )}
            </div>

            {/* Message Field */}
            <div className="mb-4">
                <label className="block text-white mb-2">Message</label>
                <textarea
                    {...register("message", {
                        required: "Message is required",
                    })}
                    className="w-full p-2 rounded bg-slate-700 text-white h-32"
                    placeholder="Your message here..."
                />
                {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                        {errors.message.message}
                    </p>
                )}
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-500 transition-all duration-200"
            >
                {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {/* Success/Error Message */}
            {submitMessage && (
                <p
                    className={`mt-4 text-center ${
                        submitMessage.includes("successfully")
                            ? "text-green-400"
                            : "text-red-400"
                    }`}
                >
                    {submitMessage}
                </p>
            )}
        </form>
    );
}

export default ContactForm;
