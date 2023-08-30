// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

// work slider data
const workSlider = {
  slides: [
    {
      images: [
        {
          path: "/work/hledammotory.png",
          title: "title",
          url: "https://www.hledammotory.cz",
          subtitle: "subtitle",
          icon: <BsArrowRight />,
        },
        {
          path: "/work/knoflix.png",
          title: "title",
          url: "https://www.knoflix.cz",
          subtitle: "subtitle",
          icon: <BsArrowRight />,
        },
        {
          path: "/work/vaszubarpicture.png",
          title: "title",
          url: "https://www.vaszubarvhk.cz",
          subtitle: "subtitle",
          icon: <BsArrowRight />,
        },
        {
          path: "/work/jpsteelpicture.png",
          title: "title",
          url: "https://www.jpsteel.cz",
          subtitle: "subtitle",
          icon: <BsArrowRight />,
        },
      ],
    },
    {
      images: [
        {
          path: "/work/iheadphones.png",
          title: "title",
          url: "/",
          subtitle: "subtitle",
          icon: <BsArrowRight />,
        },
        {
          path: "/work/lfypicture.png",
          title: "title",
          url: "/",
          subtitle: "subtitle",
          icon: <BsArrowRight />,
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px] test"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-1 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <a
                    href={image.url}
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-20 transition-all duration-300">
                        <div className="flex justify-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">LIVE</div>
                          {/* title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transiton-all duration-300 delay-150">
                            PROJECT
                          </div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
