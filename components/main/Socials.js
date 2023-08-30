// link
import Link from "next/link";

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
} from "react-icons/ri";

const socialIcons = [
  { icon: RiLinkedinLine, link: "https://www.linkedin.com/in/pavelhajduch/" },
  { icon: RiInstagramLine, link: "https://www.instagram.com/pavelhaj/?hl=en" },
  { icon: RiFacebookLine, link: "/" },
  { icon: RiYoutubeLine, link: "/" },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialIcons.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          className="hover:text-accent transition-all duration-300"
        >
          <social.icon className="text-2xl" />
        </Link>
      ))}
    </div>
  );
};

export default Socials;
