import Link from "next/link";

const ProfileNotFound = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center w-full'>
      <h2 className='text-3xl mb-5'>Profile or Account doesn't exists.</h2>
      <div className='text-xl'>
        <p>
          <span>Go to </span>
          <Link className='text-red-500 underline' href='/'>
            Home
          </Link>
        </p>
        <p>
          <Link className='text-red-500 underline' href='/account/login'>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ProfileNotFound;
