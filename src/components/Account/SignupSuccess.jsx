import Link from "next/link";

const SignupSuccess = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl mb-3">Registration Successful</h2>
      <p>You can now login into your account.</p>
      <Link href='/account/login' className="text-gossip-color-01 underline text-lg" >Login Here</Link>
    </div>
  );
};

export default SignupSuccess;
