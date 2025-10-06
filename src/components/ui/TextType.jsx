import { useState, useEffect } from "react";

function TextType({
    text,
    typingSpeed = 100,
    pauseDuration = 1000,
    showCursor = true,
    loop = true,
    cursorCharacter = "|",
    textColors = ["#000"],
    className = "",
}) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        const timeout = setTimeout(
            () => {
                const currentText = text[currentTextIndex];

                if (!isDeleting) {
                    if (currentCharIndex < currentText.length) {
                        setDisplayText(
                            currentText.substring(0, currentCharIndex + 1)
                        );
                        setCurrentCharIndex(currentCharIndex + 1);
                    } else {
                        // If loop is false, stop here and don't start deleting
                        if (loop) {
                            setTimeout(
                                () => setIsDeleting(true),
                                pauseDuration
                            );
                        }
                    }
                } else {
                    if (currentCharIndex > 0) {
                        setDisplayText(
                            currentText.substring(0, currentCharIndex - 1)
                        );
                        setCurrentCharIndex(currentCharIndex - 1);
                    } else {
                        setIsDeleting(false);
                        setCurrentTextIndex(
                            (currentTextIndex + 1) % text.length
                        );
                    }
                }
            },
            isDeleting ? typingSpeed / 2 : typingSpeed
        );

        return () => clearTimeout(timeout);
    }, [
        currentCharIndex,
        isDeleting,
        currentTextIndex,
        text,
        typingSpeed,
        pauseDuration,
        loop,
    ]);

    const currentColor = textColors[currentTextIndex % textColors.length];

    return (
        <span className={className} style={{ color: currentColor }}>
            {displayText}
            {showCursor && (
                <span className="animate-pulse">{cursorCharacter}</span>
            )}
        </span>
    );
}

export default TextType;
