import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import ppf from '../assets/me.jpg';
import { Link } from "react-scroll";

const Home = () => {
    return (
      <div
      name="home"
      className="h-screen w-full bg-[#0a000f]"
      >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Kalpit Patel
          </h2>
          <p className="text-gray-500 py-4 w-fit">
            Creative Software/Machine Learning Engineer from Purdue University currently learning to be a Full-Stack Developer.
            4+ years experience in Java Backend & Databases and 1+ years experience in Web Development.
            Currently, I am working on web application projects using technologies like
            React, Tailwind, Next.js, Node.js, Mongodb. Follow me on my journey as I try to develop high quality software
            and incorporate artificial intelligence in them.
          </p>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={ppf}  
            alt="my profile"
            className="rounded-2xl mx-auto w-1/2 md:w-half"
          />
        </div>
      </div>
    </div>
    );
  };
  export default Home;