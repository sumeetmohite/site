import React from 'react';
import Typical from 'react-typical';
import { motion } from 'framer-motion';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../content';
import useStartAnimation from '../hook/useStartAnimation';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  const transition = (duration) =>
    `transition duration-${duration} ease-in-out`;
  const styleTranslate = 'translate-y-10 opacity-0';
  const animated = useStartAnimation();
  return (
    <div
      style={{
        backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(${process.env.PUBLIC_URL + '/assets/main-bg.jpg'})`,
        backgroundRepeat: 'no-repeat',
      }}
      className="min-h-screen flex items-center justify-center"
      id="header"
    >
      <div className="flex flex-col items-center justify-center md:flex-row-reverse md:w-10/12 md:justify-between">
        <motion.div className="font-dosis w-full md:w-5/5 text-center md:text-center"
          initial={{x:'-100vw'}}
          animate={{x:0}}
          transition={{type:'spring', delay:1, duration:1}}

        >
          <h1
            className={`text-3xl md:text-4xl lg:text-6xl text-white font-bold transform ${
              animated ? 'translate-y-0' : styleTranslate
            }  ${transition(2000)} `}
          >
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h1>
          <h2
            className={`text-2xl md:text-4xl text-white transform ${
              animated ? 'translate-y-0' : styleTranslate
            } ${transition(3000)} `}
          >
            {content.header.text[2]}
            <Typical
              steps={content.header.typical}
              loop={Infinity}
              className="inline-block"
              wrapper="p"
            />
          </h2>

          <ScrollLink to="mywork" smooth={true}>
            <button
              className={` animate-bounce bg-green-900 px-10 py-3 text-lg uppercase text-white font-bold rounded-lg mt-10 hover:bg-green-600 transform  ${
                animated ? 'translate-y-0' : styleTranslate
              } ${transition(2000)}`}
            >
              {content.header.btnText}
            </button>
          </ScrollLink>
        </motion.div>
      </div>
    </div>
  );
}