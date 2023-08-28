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
          <FaHtml5 key="1" />,
          <FaCss3 key="2" />,
          <FaJs key="3" />,
          <SiTypescript key="4" />,
          <FaReact key="5" />,
          <SiNextdotjs key="6" />,
          <SiFramer key="7" />,
          <FaWordpress key="8" />,
          <SiGraphql key="9" />,
          <SiReactquery key="10" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="11" />,
          <SiAdobexd key="12" />,
          <SiAdobephotoshop key="13" />,
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
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { useState } from "react";
import {
  calculateCodingHours,
  calculateYearsAsDeveloper,
} from "../../utils/dates";

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
        className="hidden xl:flex absolute bottom-0 -left-[260px] avatar h-3/4"
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
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div key={iconIndex} className="text-2xl ">
                          {icon}
                        </div>
                      );
                    })}
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
