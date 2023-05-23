import React from 'react'

const About = () => { 
    return (
      <div
        name="about"
        id="about"
        className="w-full h-screen bg-[#0a192f] text-gray-300"
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className=" py-16 rounded-md bg-green-800 flex flex-col justify-center items-center w-4/6">
            <div className="max-w-[1000px] w-full grid grid-cols-1 gap-50 mb-4">
              <div className="sm:text-center pb-8 pl-4">
                <p className="text-4xl font-bold inline border-b-4 border-red-500">
                  About Me
                </p>
              </div>
              <div></div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-1 gap-8 px-4">
              <div className="sm:text-center text-2xl font-bold">
                <p>
                  Hi. I'm Kalpit
                </p>
              </div>
              <div>
                <p>
                  {" "}
                  I am a recent graduate from Purdue University with a Bachelor's in Computer Science with
                  a concentration in Machine Learning.
                  A software developer with experience in building Responsive and
                  Scalable Web apps. I am well-knowledged in UI/UX principles and
                  practices. In addition to software development, I am also equipped to 
                  perform Data Analysis and use Machine Learning techniques to train
                  powerful models and make accurate data predictions or improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default About;
