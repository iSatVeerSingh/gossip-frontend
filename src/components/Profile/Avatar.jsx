import Image from "next/image";

const Avatar = ({ src, alt, className }) => {
  return (
    <div
      className={`block relative overflow-hidden rounded-full ${
        className ? className : "w-12 h-12"
      }`}
    >
      <Image src={src || "/images/blankuser.png"} alt={alt} fill />
    </div>
  );
};

export default Avatar;
