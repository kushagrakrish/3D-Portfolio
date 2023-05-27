import React, { useEffect, useState } from "react";

const useTypewriter = (textArray, options) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentWord = textArray[currentIndex];
      const currentWordLength = currentWord.length;

      if (!isDeleting) {
        setCurrentText((prevText) => {
          const nextChar = currentWord.charAt(prevText.length);
          return prevText + nextChar;
        });

        if (currentText === currentWord) {
          setIsDeleting(true);
          setTimeout(() => setIsDeleting(false), options.pause || 1000);
        }
      } else {
        setCurrentText((prevText) => prevText.slice(0, prevText.length - 1));

        if (currentText === "") {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
          setIsDeleting(false);
        }
      }
    }, options.speed || 100);

    return () => clearInterval(interval);
  }, [currentText, currentIndex, isDeleting, textArray, options]);

  return currentText;
};

const Typewriter = () => {
  const typedTexts = ["developer", "designer"];
  const typed = useTypewriter(typedTexts, {
    speed: 90,
    pause: 1000,
  });

  return (
    <span className='text-[#915EFF]'>
      <br className='sm:block min-[320px]:block hidden' />a {typed}
    </span>
  );
};

export default Typewriter;
