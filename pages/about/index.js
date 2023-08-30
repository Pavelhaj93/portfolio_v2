import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiTypescript,
  SiGraphql,
  SiReactquery,
  SiStripe,
  SiMongodb,
  SiPrisma,
  SiSass,
  SiTailwindcss,
  SiMui,
  SiGit,
  SiAzuredevops,
  SiJest,
  SiReacthookform,
  SiTestinglibrary,
} from "react-icons/si";

// framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//  aboutData
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          { icon: <FaHtml5 key="1" />, tooltip: "HTML" },
          { icon: <FaCss3 key="2" />, tooltip: "CSS" },
          { icon: <FaJs key="3" />, tooltip: "JavaScript" },
          { icon: <SiTypescript key="4" />, tooltip: "TypeScript" },
          { icon: <FaReact key="5" />, tooltip: "React" },
          { icon: <SiNextdotjs key="6" />, tooltip: "Next.js" },
          { icon: <SiFramer key="7" />, tooltip: "Framer Motion" },
          { icon: <FaWordpress key="8" />, tooltip: "WordPress" },
          { icon: <SiGraphql key="9" />, tooltip: "GraphQL" },
          { icon: <SiReactquery key="10" />, tooltip: "React Query" },
          { icon: <SiStripe key="11" />, tooltip: "Stripe" },
          { icon: <SiMongodb key="12" />, tooltip: "MongoDB" },
          { icon: <SiPrisma key="13" />, tooltip: "Prisma" },
          { icon: <SiSass key="14" />, tooltip: "Sass" },
          { icon: <SiTailwindcss key="15" />, tooltip: "Tailwind CSS" },
          { icon: <SiMui key="16" />, tooltip: "Material UI" },
          { icon: <SiGit key="17" />, tooltip: "Git" },
          { icon: <SiAzuredevops key="18" />, tooltip: "Azure DevOps" },
          { icon: <SiReacthookform key="29" />, tooltip: "React Hook Form" },
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          { icon: <FaFigma key="b1" />, tooltip: "Figma" },
          { icon: <SiAdobexd key="b2" />, tooltip: "Adobe XD" },
          { icon: <SiAdobephotoshop key="b3" />, tooltip: "Adobe Photoshop" },
        ],
      },
      {
        title: "Testing",
        icons: [
          { icon: <SiJest key="c1" />, tooltip: "Jest" },
          { icon: <SiTestinglibrary key="c2" />, tooltip: "Testing Library" },
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Frontend Developer - Actum Digital a.s.",
        stage: "2023 - now",
      },
      {
        title: "Frontend Developer - Rohlik Group a.s.",
        stage: "2022 - 2023",
      },
      {
        title: "Fullstack Developer - Freelancer",
        stage: "2021 - now",
      },
    ],
  },
  {
    title: "certificates",
    info: [
      {
        title: "Introduction to Web Accessibility - W3Cx",
        stage: "2023",
      },
      {
        title: "Graph Developer Associate - Apollo GraphQL",
        stage: "2022",
      },
      {
        title: "Fullstack Developer course - Coding Bootcamp Praha",
        stage: "2022",
      },
    ],
  },
];

// counterData
const counterData = [
  {
    title: "Years of experience",
    end: calculateYearsAsDeveloper(new Date(2021, 7, 23)),
    duration: 3,
  },
  {
    title: "Satisfied clients",
    end: 12,
    duration: 4,
  },
  {
    title: "Finished projects",
    end: 15,
    duration: 5,
  },
  {
    title: "Hours coding spent",
    end: calculateCodingHours(new Date(2021, 7, 23), new Date()),
    duration: 6,
  },
];

// counter
import CountUp from "react-countup";

// components

import Circles from "../../components/images/Circles";
import { useState } from "react";
import {
  calculateCodingHours,
  calculateYearsAsDeveloper,
} from "../../utils/dates";
import Avatar from "../../components/images/Avatar";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[280px] avatar h-3/4"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            {calculateYearsAsDeveloper(new Date(2021, 7, 23))} years ago, I
            began freelancing as a developer. Since then, I&apos;ve done remote
            work for copmanies, consulted for startups, and collaborated on
            digital products for business and consumer use.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 flex-row">
              {/* experience */}
              {counterData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
                  >
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp
                        start={0}
                        end={item.end}
                        duration={item.duration}
                      />
                      +
                    </div>
                    <div className="text-xs uppercase tracking-wide-[1px] leading-[1.4] max-w-[100px]">
                      {item.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 z-10`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    <div className="flex flex-row gap-2 flex-wrap">
                      {item.icons?.map((iconItem, iconIndex) => {
                        return (
                          <div
                            key={iconIndex}
                            className="group relative flex hover:text-accent transition-all duration-300"
                          >
                            <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 hidden xl:group-hover:flex">
                              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                                <div className="text-[12px] leading-none font-semibold capitalize">
                                  {iconItem.tooltip}
                                </div>
                                <div className="border-solid border-t-white border-t-8 border-x-transparent border-x-[6px] border-b-0 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[100%]"></div>
                              </div>
                            </div>
                            <div key={iconIndex} className="text-2xl">
                              {iconItem.icon}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
