import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '../../styles/assets/images/hero-image-for-portfolio.svg';
import Github from '../../styles/assets/images/github-svg-icon.svg';
import LinkedIn from '../../styles/assets/images/LinkedIn-svg-icon.svg';
import Twitter from '../../styles/assets/images/twitter-svg-icon.svg';
import Instagram from '../../styles/assets/images/instagram-svg-icon.svg';
import AngelList from '../../styles/assets/images/angellist-svg-icon.svg';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import SubTitle from '../../components/SubTitle';
import CustomImage from '../../components/CustomImage';

const Hero = () => {
  return (
    <section className="md:container mx-auto px-6 min-h-[90vh] mt-6" id="home">
      <main className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-6">
        {/* Left Section */}
        <div>
          <Title name="Zain" />
          <Paragraph
            description="Passionate Full Stack Web Developer and UI/UX Designer with
            Bachelors in Computer Science skilled in JavaScript, React, Redux,
            NodeJS, and NextJS built numerous projects using the latest
            technologies and spent 1400+ hours working remotely with developers
            from 50+ countries."
          />
          <SubTitle subTitle="LET'S CONNECT" />
          <ul className="flex items-center space-x-5 mt-4">
            <li>
              <Link href="https://github.com/zainsadaqat">
                <a>
                  <CustomImage
                    className="hover:animate-pulse"
                    src={Github}
                    width={30}
                    height={30}
                    alt="Github"
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://angel.co/u/zain-sadaqat">
                <a>
                  <CustomImage
                    className="hover:animate-pulse"
                    src={AngelList}
                    width={30}
                    height={30}
                    alt="AngelList"
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/zain.web.dev">
                <a>
                  <CustomImage
                    className="hover:animate-pulse"
                    src={Instagram}
                    width={30}
                    height={30}
                    alt="Instagram"
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/zain-sadaqat/">
                <a>
                  <CustomImage
                    className="hover:animate-pulse"
                    src={LinkedIn}
                    width={30}
                    height={30}
                    alt="LinkedIn"
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/zain_sadaqat">
                <a>
                  <CustomImage
                    className="hover:animate-pulse"
                    src={Twitter}
                    width={30}
                    height={30}
                    alt="Twitter"
                  />
                </a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="p-4">
          <Image
            src={HeroImage}
            alt="Hero Image for Portfolio"
            className=""
            width={550}
            height={550}
          />
        </div>
      </main>
    </section>
  );
};

export default Hero;
