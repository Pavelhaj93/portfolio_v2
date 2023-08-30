// next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src="/avatar6.png"
        width={737}
        height={678}
        style={{
          maxHeight: "908px",
          maxWidth: "727px",
        }}
        alt=""
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
