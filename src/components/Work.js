import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../content';

export default function Work() {
  return (
    <div
      className="min-h-screen flex justify-center items-center flex-col"
      style={{
        background: '#FEFEFE',
      }}
      id="mywork"
    >
      <br/><br/><br/><br/><br/>
      <h1 className="text-5xl font-dosis font-bold">{content.work.title}</h1>
      <p className="text-gray-600 text-2xl font-dosis mb-10">I have built</p>
      <div className="flex flex-col md:flex-row justify-between items-center w-11/12 ">
        <LazyLoadImage
          effect="blur"
          placeholderSrc={content.work.imgPlaceholder}
          src={content.work.projects[0].img}
          style={{
            border: '1px solid #e5ecf9',
            boxShadow:
              '35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)',
          }}
          alt="phone prototype"
          className="m-10 transtion duration-2000 ease-in-out z-10  md:w-4/5 w-4/5"
        />
        
        <div
          className="transtion duration-2000 ease-in-out p-10 max-w-l lg:max-w-2xl rounded-lg hidden md:block"
          style={{
            border: '1px solid #e5ecf9',
            // transform: animated
            //   ? 'translate(-10%, 0%) rotate3d(0.540, -0.95, 0, 22deg) rotateZ(7deg)'
            //   : '',
            boxShadow:
              '35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div>
      <h1
        className="transition duration-2000 ease-in-out inline-block m-4  font-dosis text-xl font-bold"
      >
        {content.work.projects[0].projectName}
      </h1>
      <p
        className="transition duration-2000 ease-in-out inline-block w-11/12 m-4  text-xl font-dosis"
      >
        {content.work.projects[0].desc}
      </p>
      <button
        className="transition duration-2000 ease-in-out px-10 py-1 m-4 bg-black flex justify-around text-white rounded-lg shadow-2xl"
      >
        <img
          src="https://timo.engineer/assets/icons/rocket.svg"
          alt="rocket"
          className="mr-5"
        />
        <a className="text-lg" href="https://sumeetmohite.github.io/Wavz/"
        target="_blank" rel="noopener noreferrer" >See Live</a>
      </button>
    </div>
        </div>
        {/* <div className="flex justify-center items-center md:hidden">
          <ProjectDetail />
        </div> */}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center w-11/12 ">
        <LazyLoadImage
          effect="blur"
          placeholderSrc={content.work.imgPlaceholder}
          src={content.work.projects[1].img}
          style={{
            border: '1px solid #e5ecf9',
            boxShadow:
              '35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)',
          }}
          alt="phone prototype"
          className="m-10 transtion duration-2000 ease-in-out z-10  md:w-4/5 w-4/5"
        />
        
        <div
          className="transtion duration-2000 ease-in-out p-10 max-w-xl lg:max-w-3xl rounded-lg hidden md:block"
          style={{
            border: '1px solid #e5ecf9',
            boxShadow:
              '35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div>
      <h1
        className="transition duration-2000 ease-in-out inline-block m-4  font-dosis text-xl font-bold"
      >
        {content.work.projects[1].projectName}
      </h1>
      <p
        className="transition duration-2000 ease-in-out inline-block w-11/12 m-4  text-xl font-dosis"
      >
        {content.work.projects[1].desc}
      </p>
      <button
        className="transition duration-2000 ease-in-out px-10 py-1 m-4 bg-black flex justify-around text-white rounded-lg shadow-2xl"
      >
        <img
          src="https://timo.engineer/assets/icons/rocket.svg"
          alt="rocket"
          className="mr-5"
        />
        <a className="text-lg" >See Live</a>
        {/*href="https://sumeetmohite.github.io/task-tracker/*/}
      </button>
    </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center w-11/12 ">
        <LazyLoadImage
          effect="blur"
          placeholderSrc={content.work.imgPlaceholder}
          src={content.work.projects[2].img}
          style={{
            border: '1px solid #e5ecf9',
            boxShadow:
              '35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)',
          }}
          alt="phone prototype"
          className="m-10 transtion duration-2000 ease-in-out z-10  md:w-4/5 w-4/5"
        />
        
        <div
          className="transtion duration-2000 ease-in-out p-10 max-w-xl lg:max-w-3xl rounded-lg hidden md:block"
          style={{
            border: '1px solid #e5ecf9',
            boxShadow:
              '35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div>
      <h1
        className="transition duration-2000 ease-in-out inline-block m-4 font-dosis text-xl font-bold"
      >
        {content.work.projects[2].projectName}
      </h1>
      <p
        className="transition duration-2000 ease-in-out inline-block w-11/12 m-4  text-xl font-dosis"
      >
        {content.work.projects[2].desc}
      </p>
      <button
        className="transition duration-2000 ease-in-out px-10 py-1 m-4 bg-black flex justify-around text-white rounded-lg shadow-2xl"
      >
        <img
          src="https://timo.engineer/assets/icons/rocket.svg"
          alt="rocket"
          className="mr-5"
        />
        <p className="text-lg">See Live</p>
      </button>
    </div>
        </div>
      </div>

      
    </div>
  );
}


  