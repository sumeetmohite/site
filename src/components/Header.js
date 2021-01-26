import React, {useState, useEffect} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../content';
import Typical from 'react-typical';
import {Link as ScrollLink} from 'react-scroll';

const Header = () => {

    const [animated, setAnimated] = useState(false);
    useEffect(() => {
        setAnimated(true);
    },[]);
    return (
        <div className="min-h-screen flex items-center justify-center"
        style={{
            background: '#091c29',
        }}>
        <div className="w-10/12 max-auto flex flex-col md:flex-row-reverse items-center justify-between">
            <div className="w-full md:w-2/5">
            <LazyLoadImage 
            src={content.header.img} 
            effect="blur"
            placeholderSrc={process.env.PUBLIC_URL + '/logo512.png'}/>
            </div>
                <div className="font-dosis text-center text-center md:text-left">
                    <h2 className={`${animated ? '' : 'translate-y-10 opacity-0'}
                    transform transition duration-2000 ease-in-out text-indigo-200 text-3xl md:text-5xl font-bold`}>
                    {content.header.text[0]}
                    </h2>
                    <h2 className={`${animated ? '' : 'translate-y-10 opacity-0'}
                    transform transition duration-2000 ease-in-out text-white text-3xl md:text-5xl font-bold`}>
                    {content.header.text[1]}
                    </h2>
                    <h1 className={`${animated ? '' : 'translate-y-10 opacity-0'}
                    transform transition duration-2000 ease-in-out font-bold text-2xl text-gray-500`}>
                        {content.header.text[2]}{' '}
                    <Typical
                    steps={content.header.typical}
                    loop={Infinity}
                    className="inline-block"
                    />
                    </h1>
                    <ScrollLink to="stack" smooth={true}>
                    <button className=" animate-float text-white bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg">{content.header.btnText}
                    </button>
                    </ScrollLink>
                </div>
                </div>
        </div>
    )
}

export default Header;
