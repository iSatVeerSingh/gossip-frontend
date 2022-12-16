import Image from "next/image";

const Avatar = ({ src, alt, className }) => {
  return (
    <div
      className={`block relative overflow-hidden rounded-full ${
        className || "w-12 h-12"
      }`}
    >
      <Image src={src || "/images/blankuser.png"} alt={alt} fill sizes="100%" />
    </div>
  );
};

export default Avatar;
