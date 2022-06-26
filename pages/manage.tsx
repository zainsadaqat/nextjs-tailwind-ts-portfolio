import type { NextPage } from 'next';
import Image from 'next/image';
import Logo from '../styles/assets/img/logo.svg';
import IllustrationIntro from '../styles/assets/img/Illustration-intro.svg';
import AvatarAli from '../styles/assets/img/avatar-ali.png';
import AvatarAnisha from '../styles/assets/img/avatar-anisha.png';
import AvatarRichard from '../styles/assets/img/avatar-richard.png';
import LogoWhite from '../styles/assets/img/logo-white.svg';
import Facebook from '../styles/assets/img/icon-facebook.svg';
import YouTube from '../styles/assets/img/icon-youtube.svg';
import Twitter from '../styles/assets/img/icon-twitter.svg';
import Pinterest from '../styles/assets/img/icon-pinterest.svg';
import Instagram from '../styles/assets/img/icon-instagram.svg';

const Manage: NextPage = () => {
  return (
    <>
      {/* Navbar */}
      <header>
        <nav className="relative container mx-auto p-6">
          {/* Flex Container */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="pt-2">
              <Image src={Logo} alt="Logo" />
            </div>
            {/* Menu Items */}
            <ul className="hidden space-x-6 md:flex">
              <li>
                <a href="#" className="hover:text-darkGrayishBlue">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-darkGrayishBlue">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-darkGrayishBlue">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-darkGrayishBlue">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-darkGrayishBlue">
                  Community
                </a>
              </li>
            </ul>
            {/* Button */}
            {/* md:block for medium and up sizes it will display as block for smaller than medium size and it'll be hidden */}
            <a
              href="#"
              className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
            >
              Get Started
            </a>
            {/* <!-- Hamburger Icon --> */}
            <button
              id="menu-btn"
              className="block hamburger md:hidden focus:outline-none"
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main id="hero">
        {/* Flex Container */}
        <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:flex-row md:space-y-0">
          {/* Left Item */}
          <div className="flex flex-col mb-32 space-y-8 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Bring everyone togather to build better products
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage makes it simple for Software teams to plan day-to-day tasks
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="#"
                className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
              >
                Get Started
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="md:w-1/2">
            <Image
              src={IllustrationIntro}
              alt="Illustration Intro for Hero Section"
            />
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features">
        {/* Flex Container */}
        <div className="container flex flex-col items-center px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row md:items-start">
          {/* What's Different */}
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
              What's Different about Manage
            </h2>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              atque, sequi esse necessitatibus, corporis at nobis nihil, aperiam
              modi aspernatur illum exercitationem sunt. Nobis voluptatibus
              vitae at minus provident voluptates?
            </p>
          </div>
          {/* Numbered List */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            {/* List Item 1 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track company-wide progrss
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Track compandy-wide progress
                </h3>
                <p className="text-darkGrayishBlue text-center md:text-left">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  beatae numquam, atque odit explicabo magnam, voluptate animi
                  adipisci aspernatur voluptatibus commodi ex nesciunt ea
                  reiciendis blanditiis dolores, repellendus laudantium et!
                </p>
              </div>
            </div>

            {/* List Item 2 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track company-wide progrss
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Track compandy-wide progress
                </h3>
                <p className="text-darkGrayishBlue text-center md:text-left">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  beatae numquam, atque odit explicabo magnam, voluptate animi
                  adipisci aspernatur voluptatibus commodi ex nesciunt ea
                  reiciendis blanditiis dolores, repellendus laudantium et!
                </p>
              </div>
            </div>

            {/* List Item 3 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track company-wide progrss
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Track compandy-wide progress
                </h3>
                <p className="text-darkGrayishBlue text-center md:text-left">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  beatae numquam, atque odit explicabo magnam, voluptate animi
                  adipisci aspernatur voluptatibus commodi ex nesciunt ea
                  reiciendis blanditiis dolores, repellendus laudantium et!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Testimonials --> */}
      <section id="testimonials">
        {/* <!-- Container to heading and testm blocks --> */}
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          {/* <!-- Heading --> */}
          <h2 className="text-4xl font-bold text-center">Testimonials</h2>
          {/* <!-- Testimonials Container --> */}
          <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
            {/* <!-- Testimonial 1 --> */}
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <Image
                src={AvatarAnisha}
                className="w-16 -scroll-mt-14"
                alt="Anisha's Avatar"
              />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>

            {/* <!-- Testimonial 2 --> */}
            <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
              <Image
                src={AvatarAli}
                className="w-16 -mt-14"
                alt="Ali's Avatar"
              />
              <h5 className="text-lg font-bold">Ali Bravo</h5>
              <p className="text-sm text-darkGrayishBlue">
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </div>

            {/* <!-- Testimonial 3 --> */}
            <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
              <Image src={AvatarRichard} className="w-16 -mt-14" alt="" />
              <h5 className="text-lg font-bold">Richard Watts</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
          </div>
          {/* <!-- Button --> */}
          <div className="my-16">
            <a
              href="#"
              className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* <!-- CTA Section --> */}
      <section id="cta" className="bg-brightRed">
        {/* <!-- Flex Container --> */}
        <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
          {/* <!-- Heading --> */}
          <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
            Simplify how your team works today
          </h2>
          {/* <!-- Button --> */}
          <div>
            <a
              href="#"
              className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer className="bg-veryDarkBlue">
        {/* <!-- Flex Container --> */}
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          {/* <!-- Logo and social links container --> */}
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2022, All Rights Reserved
            </div>
            {/* <!-- Logo --> */}
            <div>
              <Image src={LogoWhite} className="h-8" alt="" />
            </div>
            {/* <!-- Social Links Container --> */}
            <div className="flex justify-center space-x-4">
              {/* <!-- Link 1 --> */}
              <a href="#">
                <Image src={Facebook} alt="" className="h-8" />
              </a>
              {/* <!-- Link 2 --> */}
              <a href="#">
                <Image src={YouTube} alt="" className="h-8" />
              </a>
              {/* <!-- Link 3 --> */}
              <a href="#">
                <Image src={Twitter} alt="" className="h-8" />
              </a>
              {/* <!-- Link 4 --> */}
              <a href="#">
                <Image src={Pinterest} alt="" className="h-8" />
              </a>
              {/* <!-- Link 5 --> */}
              <a href="#">
                <Image src={Instagram} alt="" className="h-8" />
              </a>
            </div>
          </div>
          {/* <!-- List Container --> */}
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Home
              </a>
              <a href="#" className="hover:text-brightRed">
                Pricing
              </a>
              <a href="#" className="hover:text-brightRed">
                Products
              </a>
              <a href="#" className="hover:text-brightRed">
                About
              </a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Careers
              </a>
              <a href="#" className="hover:text-brightRed">
                Community
              </a>
              <a href="#" className="hover:text-brightRed">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* <!-- Input Container --> */}
          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="Updated in your inbox"
                />
                <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                  Go
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; 2022, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Manage;
