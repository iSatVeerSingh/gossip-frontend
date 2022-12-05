import Image from "next/image";

const Avatar = ({ src, alt }) => {
  return (
    <div className='block w-12 h-12 relative overflow-hidden rounded-full'>
      <Image src={src} alt={alt} fill />
    </div>
  );
};

export default Avatar;
