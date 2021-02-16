import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-scroll';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import content from '../content';
import useWindowPosition from '../hook/useWindowPosition';

export default function Contact() {
  const animated = useWindowPosition('header', 0.6, 4);
  return (
    <div
      className=" min-h-screen  flex justify-center items-center  "
      id="mycontact"
    >
      <div
        style={{
          minHeight: '50vh',
          background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
        }}
        className="w-full md:w-4/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center"
      >
        <LazyLoadImage
          effect="blur"
          src={content.contact.img}
          placeholderSrc={content.contact.imgPlaceholder}
          alt="profile"
          style={{borderRadius:'50%', border:'2px solid white', marginTop:'0px'}}
          width="300px"
          className="mt-10 transtion duration-2000 ease-in-out mx-auto"
        />
        <div className="font-dosis w-4/5 md:w-2/5 mt-5 transtion duration-2000">
          <h1
            className={`${
              animated ? '' : 'translate-y-10 opacity-0'
            } transform transition duration-3000 text-white text-5xl font-bold`}
          >
            {content.contact.title}
          </h1>
          <p
            className={`${
              animated ? '' : 'translate-y-10 opacity-0'
            } transform transition duration-3000 text-white text-2xl`}
          >
            {content.contact.desc}
          </p>
          <div
            className={`flex ${
              animated ? '' : 'translate-y-10 opacity-0'
            } transform transition duration-3000 `}
          >
            <span className="back-to-top">
          <Link to="mywork" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
                <a
                  href="https://github.com/sumeetmohite"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} style={{color:'white', fontSize:'200%', margin:'1rem 1rem 1rem 1rem'}} />
                </a>
                <a
                  href="https://linkedin.com/in/sumeetmohite"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} style={{color:'white', fontSize:'200%', margin:'1rem 1rem 1rem 1rem'}} />
                </a>
                <a
                  href="https://twitter.com/sumeetmohite9"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faTwitter} style={{color:'white', fontSize:'200%', margin:'1rem 1rem 1rem 1rem'}} />
                </a>
                <a
                  href="https://instagram.com/sumeetmohite9"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} style={{color:'white', fontSize:'200%', margin:'1rem 1rem 1rem 1rem'}} />
                </a>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}