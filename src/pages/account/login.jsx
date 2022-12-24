import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SubmitBtn from "../../components/Buttons/SubmitBtn";
import InputBox from "../../components/Form/InputBox";
import AccountLayout from "../../components/Layouts/AccountLayout";
import { useLoginUserMutation } from "../../services/userAccountApi";
import { validateForm } from "../../utils/formValidate";

const Login = () => {
  const [formErrors, setFormErrors] = useState(null);
  const router = useRouter();

  const [loginUser, { isError, isLoading, isSuccess, isUninitialized, error }] =
    useLoginUserMutation();

  useEffect(() => {
    if (!isUninitialized && isError) {
      alert(error.data?.data);
    } else if (!isUninitialized && isSuccess) {
      router.push("/conversations");
    }
  }, [isLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formInputValues = new FormData(e.currentTarget);

    const formData = {
      username: formInputValues.get("username")?.toString().trim(),
      password: formInputValues.get("password")?.toString().trim(),
    };

    const isFormErr = validateForm(formData, "login");

    if (isFormErr) {
      setFormErrors(isFormErr);
      return;
    }

    setFormErrors(null);

    loginUser(formData);
  };

  return (
    <div className='bg-gossip-dark-02 w-full max-w-[500px] rounded-xl overflow-hidden'>
      <div className='bg-gossip-color-01 p-4 text-gossip-dark-01'>
        <h2 className='text-3xl font-bold'>Welcome Back !</h2>
      </div>
      <div className='p-4'>
        <form onSubmit={handleSubmit}>
          <InputBox
            type='text'
            name='username'
            label='Username'
            id='username'
            placeholder='Pick a username'
            inputError={formErrors?.username}
          />
          <InputBox
            type='password'
            name='password'
            label='Password'
            id='password'
            placeholder='Pick strong password'
            inputError={formErrors?.password}
          />
          <SubmitBtn btnText='Login Now' />
        </form>
        <p className='mt-2 flex flex-col sm:flex-row sm:gap-2'>
          <span>Don&#39;t have an account?</span>
          <Link className='text-gossip-color-01' href='./signuo'>
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

Login.Layout = AccountLayout;

export default Login;
