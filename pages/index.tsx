import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Github from '../styles/assets/images/github-svg-icon.svg';
import LinkedIn from '../styles/assets/images/LinkedIn-svg-icon.svg';
import Twitter from '../styles/assets/images/twitter-svg-icon.svg';
import Instagram from '../styles/assets/images/instagram-svg-icon.svg';
import AngelList from '../styles/assets/images/angellist-svg-icon.svg';
import WhiteLogo from '../styles/assets/images/white-logo.svg';
import WhiteGithub from '../styles/assets/images/white-github.svg';
import WhiteLinkedIn from '../styles/assets/images/white-linkedin.svg';
import WhiteTwitter from '../styles/assets/images/white-twitter.svg';
import WhiteInstagram from '../styles/assets/images/white-instagram.svg';
import WhiteAngelList from '../styles/assets/images/white-angellist.svg';
import ProjectImage1 from '../styles/assets/images/todo-doing-done-image.jpeg';
import ProjectImage2 from '../styles/assets/images/project-image-1.jpeg';
import ProjectImage3 from '../styles/assets/images/project-image-2.jpeg';
import ProjectImage4 from '../styles/assets/images/project-image.jpeg';
import HTMLIcon from '../styles/assets/images/html-svg-icon.svg';
import CSSIcon from '../styles/assets/images/css-svg-icon.svg';
import JavaScriptIcon from '../styles/assets/images/javascript-svg-icon.svg';
import RubyIcon from '../styles/assets/images/ruby-svg-icon.svg';
import ReactIcon from '../styles/assets/images/react-svg-icon.svg';
import ReduxIcon from '../styles/assets/images/redux-svg-icon.svg';
import RailsIcon from '../styles/assets/images/ruby-on-rails-svg-icons.svg';
import NextJSIcon from '../styles/assets/images/nextjs-svg-icon.svg';
import React from 'react';
import Navbar from '../sections/navbar/Navbar';
import Hero from '../sections/hero/Hero';

const Home: NextPage = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
      {/* Projects Section */}
      <section
        className="md:container mx-auto px-6 mt-10 min-h-[100vh] md:mt-12"
        id="projects"
      >
        <h2 className="text-center text-5xl font-extrabold text-darkMode md:text-6xl md:font-extrabold">
          Projects
        </h2>

        {/* Projects Container */}
        <div className="mt-4 flex flex-col justify-between items-center md:flex-row md:items-center md:flex-wrap md:justify-center md:space-x-6">
          {/* Project # 01 */}
          <div className="md:grow md:shrink my-12 bg-[#f1f1f1] rounded-2xl max-w-[500px] min-h-[430px]">
            {/* Project Image */}
            <div>
              <Image
                className="rounded-t-2xl max-w-[550px]"
                src={ProjectImage1}
                alt="Project Image"
              />
            </div>

            <div className="p-6">
              {/* Project Creation Date */}
              <h4 className="text-[8px] mt-1 text-[#1F2937]">
                Created at: 23rd June 2022
              </h4>
              {/* Project Title */}
              <h2 className="mt-1 text-[#1F2937] font-extrabold text-4xl">
                Project Title 1
              </h2>
              {/* Project Description */}
              <p className="text-[#1F2937] text-[0.85rem] mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores culpa dolorem nobis, numquam modi dicta maxime
                molestiae recusandae doloribus voluptatem soluta sed quo earum
                excepturi perferendis aperiam. Unde, facilis modi!
              </p>
              {/* Technology used in the Project */}
              <button
                type="button"
                className="w-full bg-primaryColor text-whiteColor px-10 py-2 my-3 rounded font-bold"
              >
                See Project
              </button>
            </div>
          </div>

          {/* Paste Below */}

          {/* Project # 02 */}
          <div className="md:grow md:shrink my-12 bg-[#f1f1f1] rounded-2xl max-w-[500px] min-h-[430px]">
            {/* Project Image */}
            <div>
              <Image
                className="rounded-t-2xl max-w-[550px]"
                src={ProjectImage2}
                alt="Project Image"
              />
            </div>

            <div className="p-6">
              {/* Project Creation Date */}
              <h4 className="text-[8px] mt-1 text-[#1F2937]">
                Created at: 23rd June 2022
              </h4>
              {/* Project Title */}
              <h2 className="mt-1 text-[#1F2937] font-extrabold text-4xl">
                Project Title 1
              </h2>
              {/* Project Description */}
              <p className="text-[#1F2937] text-[0.85rem] mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores culpa dolorem nobis, numquam modi dicta maxime
                molestiae recusandae doloribus voluptatem soluta sed quo earum
                excepturi perferendis aperiam. Unde, facilis modi!
              </p>
              {/* Technology used in the Project */}
              <button
                type="button"
                className="w-full bg-primaryColor text-whiteColor px-10 py-2 my-3 rounded font-bold"
              >
                See Project
              </button>
            </div>
          </div>

          {/* Project # 01 */}
          <div className="md:grow md:shrink my-12 bg-[#f1f1f1] rounded-2xl max-w-[500px] min-h-[430px]">
            {/* Project Image */}
            <div>
              <Image
                className="rounded-t-2xl max-w-[550px]"
                src={ProjectImage3}
                alt="Project Image"
              />
            </div>

            <div className="p-6">
              {/* Project Creation Date */}
              <h4 className="text-[8px] mt-1 text-[#1F2937]">
                Created at: 23rd June 2022
              </h4>
              {/* Project Title */}
              <h2 className="mt-1 text-[#1F2937] font-extrabold text-4xl">
                Project Title 1
              </h2>
              {/* Project Description */}
              <p className="text-[#1F2937] text-[0.85rem] mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores culpa dolorem nobis, numquam modi dicta maxime
                molestiae recusandae doloribus voluptatem soluta sed quo earum
                excepturi perferendis aperiam. Unde, facilis modi!
              </p>
              {/* Technology used in the Project */}
              <button
                type="button"
                className="w-full bg-primaryColor text-whiteColor px-10 py-2 my-3 rounded font-bold"
              >
                See Project
              </button>
            </div>
          </div>

          {/* Project # 01 */}
          <div className="md:grow md:shrink my-12 bg-[#f1f1f1] rounded-2xl max-w-[500px] min-h-[430px]">
            {/* Project Image */}
            <div>
              <Image
                className="rounded-t-2xl max-w-[550px]"
                src={ProjectImage4}
                alt="Project Image"
              />
            </div>

            <div className="p-6">
              {/* Project Creation Date */}
              <h4 className="text-[8px] mt-1 text-[#1F2937]">
                Created at: 23rd June 2022
              </h4>
              {/* Project Title */}
              <h2 className="mt-1 text-[#1F2937] font-extrabold text-4xl">
                Project Title 1
              </h2>
              {/* Project Description */}
              <p className="text-[#1F2937] text-[0.85rem] mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores culpa dolorem nobis, numquam modi dicta maxime
                molestiae recusandae doloribus voluptatem soluta sed quo earum
                excepturi perferendis aperiam. Unde, facilis modi!
              </p>
              {/* Technology used in the Project */}
              <button
                type="button"
                className="w-full bg-primaryColor text-whiteColor px-10 py-2 my-3 rounded font-bold"
              >
                See Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* Hero Section */}
      <section
        className="md:container mx-auto px-6 min-h-[100vh] mt-6"
        id="about"
      >
        <div className="flex flex-col items-center justify-center space-y-6 md:flex-row md:justify-between md:items-start md:space-6">
          {/* Left Section */}
          <div className="mt-6">
            <h3 className="text-4xl font-black text-darkMode md:text-7xl">
              About Myself
            </h3>
            <p className="mt-4 max-w-[500px] text-lightGray">
              I’m a software developer! I can help you build a product , feature
              or website Look through some of my work and experience! If you
              like what you see and have a project you need coded, don’t
              hestiate to contact me.
            </p>
            <h3 className="mt-4 text-primaryColor font-semibold">
              LET'S CONNECT
            </h3>
            <ul className="flex items-center space-x-5 mt-4">
              <li>
                <a href="https://github.com/zainsadaqat">
                  <Image
                    className="hover:animate-pulse"
                    src={Github}
                    width={30}
                    height={30}
                    alt="Github"
                  />
                </a>
              </li>
              <li>
                <a href="https://angel.co/u/zain-sadaqat">
                  <Image
                    className="hover:animate-pulse"
                    src={AngelList}
                    width={30}
                    height={30}
                    alt="AngelList"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/zain.web.dev">
                  <Image
                    className="hover:animate-pulse"
                    src={Instagram}
                    width={30}
                    height={30}
                    alt="Instagram"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/zain-sadaqat/">
                  <Image
                    className="hover:animate-pulse"
                    src={LinkedIn}
                    width={30}
                    height={30}
                    alt="LinkedIn"
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/zain_sadaqat">
                  <Image
                    className="hover:animate-pulse"
                    src={Twitter}
                    width={30}
                    height={30}
                    alt="Twitter"
                  />
                </a>
              </li>
            </ul>
            {/* Resume Button */}
            <div className="mt-6 w-full md:max-w-[300px]">
              <Link href="#">
                <a className="text-center px-12 py-3 text-white bg-primaryColor rounded-lg baseline hover:bg-darkPrimaryColor md:block">
                  Get my Resume
                </a>
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="p-4">
            <div>
              <h3 className="text-4xl font-bold text-darkMode md:text-5xl">
                Frameworks
              </h3>
              <div>
                <div className="text-center inline-block p-8">
                  <Image
                    src={ReactIcon}
                    alt="React Icon"
                    width={80}
                    height={80}
                  />
                  <h4 className="font-semibold">React</h4>
                </div>
                <div className="text-center inline-block p-8">
                  <Image
                    src={ReduxIcon}
                    alt="Redux Icon"
                    width={80}
                    height={80}
                  />
                  <h4 className="font-semibold">Redux</h4>
                </div>
                <div className="text-center inline-block p-8">
                  <Image
                    src={RailsIcon}
                    alt="Ruby on Rails Icon"
                    width={80}
                    height={80}
                  />
                  <h4 className="font-semibold">Ruby on Rails</h4>
                </div>
                <div className="text-center inline-block p-8">
                  <Image
                    src={NextJSIcon}
                    alt="NextJS Icon"
                    width={80}
                    height={80}
                  />
                  <h4 className="font-semibold">NextJS</h4>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-4xl font-bold text-darkMode md:text-5xl">
                Languages
              </h3>
              <div>
                <div className="text-center inline-block p-8">
                  <Image
                    src={HTMLIcon}
                    alt="HTML Icon"
                    width={80}
                    height={80}
                  />
                  <h4 className="font-semibold">HTML</h4>
                </div>
                <div className="text-center inline-block px-2 py-6 m-4">
                  <Image src={CSSIcon} alt="CSS Icon" width={80} height={80} />
                  <h4 className="font-semibold">CSS</h4>
                </div>
                <div className="text-center inline-block p-8">
                  <Image
                    src={JavaScriptIcon}
                    alt="JavaScript Icon"
                    width={80}
                    height={80}
                  />
                  <h4 className="font-semibold">JavaScript</h4>
                </div>
                <div className="text-center inline-block p-8">
                  <Image
                    src={RubyIcon}
                    alt="Ruby Icon"
                    width={80}
                    height={80}
                  />
                  <h4 className="font-semibold">Ruby</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="py-10 bg-[#FFF9F9] min-h-[100vh]">
        <h2 className="text-center text-5xl font-extrabold text-darkMode md:text-6xl md:font-extrabold">
          Testimonials
        </h2>
        <p className="text-lightGray mt-6 text-center">
          Please feel free to visit my{' '}
          <Link
            className="underline-offset-8"
            href="https://www.fiverr.com/zainsadaqat?up_rollout=true"
            target="_blank"
          >
            Fiverr
          </Link>{' '}
          profile to make sure that all reviews are original.
        </p>
        <div className="flex flex-col items-center justify-center mt-10 p-4">
          {/* Card 1 */}
          <div className="bg-white mt-6 p-6 border w-[100%] min-h-[100px] max-w-[600px] m-auto">
            <div>
              <div className="flex items-center justify-between p-1">
                <h3 className="font-bold text-[1.75rem]">zlatanstevic</h3>
                <span className="p-2">5 Stars</span>
              </div>
              <h4 className="font-semibold p-1">Switzerland</h4>
              <p className="max-w-[600px] mt-6">
                Very responsive service provider. Very patient and customer
                oriented. He was ready to overdeliver without hesitation. Thanks
                a lot!
              </p>
            </div>
          </div>
          {/* Card 1 end */}

          {/* Card 2 */}
          <div className="bg-white mt-6 p-6 border w-[100%] min-h-[100px] max-w-[600px] m-auto">
            <div>
              <div className="flex items-center justify-between p-1">
                <h3 className="font-bold text-[1.75rem]">tulikalpa</h3>
                <span className="p-2">5 Stars</span>
              </div>
              <h4 className="font-semibold p-1">India</h4>
              <p className="max-w-[600px] mt-6">
                Zain is a very diligent and hardworking designer. It was the
                most convenient project collaboration. He takes extra effort to
                clearly understand your requirement and treats the project as
                his own. Very involved and proactive.
              </p>
            </div>
          </div>
          {/* Card 2 end */}

          {/* Card 3 */}
          <div className="bg-white mt-6 p-6 border w-[100%] min-h-[100px] max-w-[600px] m-auto">
            <div>
              <div className="flex items-center justify-between p-1">
                <h3 className="font-bold text-[1.75rem]">milanmathew147</h3>
                <span className="p-2">5 Stars</span>
              </div>
              <h4 className="font-semibold p-1">Poland</h4>
              <p className="max-w-[600px] mt-6">
                The Work was good and I am satisfied. The rate was affordable by
                me.
              </p>
            </div>
          </div>
          {/* Card 3 end */}

          {/* Card 4 */}
          <div className="bg-white mt-6 p-6 border w-[100%] min-h-[100px] max-w-[600px] m-auto">
            <div>
              <div className="flex items-center justify-between p-1">
                <h3 className="font-bold text-[1.75rem]">ssup__</h3>
                <span className="p-2">5 Stars</span>
              </div>
              <h4 className="font-semibold p-1">Israel</h4>
              <p className="max-w-[600px] mt-6">
                So glad I found zainsadaqat! fantastic work and collaboration!
              </p>
            </div>
          </div>
          {/* Card 4 end */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 bg-[#FCFCFC] min-h-[100vh]">
        <h2 className="text-center text-5xl font-extrabold text-darkMode md:text-6xl md:font-extrabold">
          Contact
        </h2>
        <form
          className="mt-20 flex flex-col items-center justify-center"
          action="https://formspree.io/f/meqvlgqr"
          method="POST"
        >
          <div className="mt-6 w-[100%]">
            <h5>Full Name</h5>
            <input
              className="border rounded mt-1 px-3 py-2"
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="mt-6">
            <h5>Email</h5>
            <input
              className="border rounded mt-1 px-3 py-2 w-[400px] max-w-[400px]"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mt-6">
            <h5>Message</h5>
            <textarea
              className="border rounded mt-1 px-3 py-2 w-[400px] max-w-[400px]"
              rows={6}
              cols={6}
            ></textarea>
          </div>
          <button
            className="mt-8 px-12 py-3 text-white text-center bg-primaryColor rounded-lg baseline hover:bg-darkPrimaryColor md:block"
            type="submit"
          >
            Get In Touch
          </button>
        </form>
      </section>
      {/* <!-- Footer --> */}
      <footer className="bg-veryDarkBlue min-h-[200px]">
        {/* <!-- Flex Container --> */}
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          {/* <!-- Logo and social links container --> */}
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2022, All Rights Reserved
            </div>
            {/* <!-- Logo --> */}
            <div>
              <Image src={WhiteLogo} className="h-8" alt="" />
            </div>
            {/* <!-- Social Links Container --> */}
            <div className="flex justify-center space-x-4">
              {/* <!-- Link 1 --> */}
              <a href="#">
                <Image
                  src={WhiteGithub}
                  alt="Github"
                  className="h-8 hover:animate-pulse"
                  width={20}
                  height={20}
                />
              </a>
              {/* <!-- Link 2 --> */}
              <a href="#">
                <Image
                  src={WhiteAngelList}
                  alt="AngelList"
                  className="h-8 hover:animate-pulse"
                  width={20}
                  height={20}
                />
              </a>
              {/* <!-- Link 3 --> */}
              <a href="#">
                <Image
                  src={WhiteTwitter}
                  alt="Twitter"
                  className="h-8 hover:animate-pulse"
                  width={20}
                  height={20}
                />
              </a>
              {/* <!-- Link 4 --> */}
              <a href="#">
                <Image
                  src={WhiteLinkedIn}
                  alt="LinkedIn"
                  className="h-8 hover:animate-pulse"
                  width={20}
                  height={20}
                />
              </a>
              {/* <!-- Link 5 --> */}
              <a href="#">
                <Image
                  src={WhiteInstagram}
                  alt="Instagram"
                  className="h-8 hover:animate-pulse"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
          {/* <!-- List Container --> */}
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <h4 className="text-xl font-semibold text-white">Portfolio</h4>
              <a href="#home" className="hover:text-darkPrimaryColor">
                Home
              </a>
              <a href="#projects" className="hover:text-darkPrimaryColor">
                Projects
              </a>
              <a href="#testimonials" className="hover:text-darkPrimaryColor">
                Testimonials
              </a>
              <a href="#about" className="hover:text-darkPrimaryColor">
                About
              </a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <h4 className="text-xl font-semibold text-white">Projects</h4>
              <a href="#project-1" className="hover:text-darkPrimaryColor">
                Project 1
              </a>
              <a href="#project-2" className="hover:text-darkPrimaryColor">
                Project 2
              </a>
              <a href="#project-3" className="hover:text-darkPrimaryColor">
                Project 3
              </a>
            </div>
          </div>

          {/* <!-- Contact Container --> */}
          <div className="flex flex-col justify-between">
            <Link href="#contact">
              <a className="animate-bounce px-12 py-3 text-white text-center bg-primaryColor rounded-lg baseline hover:bg-darkPrimaryColor md:block">
                Contact
              </a>
            </Link>
            <div className="hidden text-white md:block">
              Copyright &copy; 2022, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
