import React from 'react';
import {motion} from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import content from '../content';

export default function Navigation() {
  return (
    <div
      style={{
        background: "linear-gradient(to right,#061161,#780206)"
      }}
      className="font-dosis fixed top-0 w-screen z-40"
    >
      <motion.div className="flex items-center w-10/12  mx-auto py-3"
          initial={{x:'-100vw'}}
          animate={{x:0}}
          transition={{type:'spring', delay:1, duration:1}}
      >
        <ScrollLink
          to="header"
          smooth={true}
          className="text-3xl  font-bold text-white flex-1 cursor-pointer"
        >
          {/* <h1>
            {content.nav.logo}
            <span className="h-3 w-3 bg-red-800 inline-block ml-2  rounded-full"></span>
          </h1> */}
        </ScrollLink>

        <div className="text-white text-xl font-bold">
          {content.nav.links.map((link, index) => {
            return (
              <ScrollLink to={link.to} smooth={true}>
                <span className="mr-4 cursor-pointer" key={index}>
                  {link.text}
                </span>
              </ScrollLink>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}