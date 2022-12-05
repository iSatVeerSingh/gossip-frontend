import Link from "next/link";
import { useEffect, useState } from "react";
import SubmitBtn from "../../components/Buttons/SubmitBtn";
import InputBox from "../../components/Form/InputBox";
import AccountLayout from "../../components/Layouts/AccountLayout";
import { useCreateUserMutation } from "../../services/userAccountApi";
import { validateForm } from "../../utils/formValidate";

const Signup = () => {
  const [formErrors, setFormErrors] = useState(null);

  const [
    createUser,
    { data, isError, isLoading, isUninitialized, isSuccess, error },
  ] = useCreateUserMutation();

  useEffect(() => {
    if (isError) {
      alert(error.data?.data);
      console.log(data, isError, isUninitialized, isSuccess, error);
      return;
    }

    if (isSuccess) {
      console.log(data);
    }
  }, [isLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formInputValues = new FormData(e.currentTarget);

    const formData = {
      firstname: formInputValues.get("firstname")?.toString().trim(),
      lastname: formInputValues.get("lastname")?.toString().trim(),
      email: formInputValues.get("email")?.toString().trim(),
      username: formInputValues.get("username")?.toString().trim(),
      password: formInputValues.get("password")?.toString().trim(),
    };

    const isFormErr = validateForm(formData, "signup");

    if (isFormErr) {
      setFormErrors(isFormErr);
      return;
    }

    setFormErrors(null);

    createUser(formData);
  };

  return (
    <div className='bg-gossip-dark-02 w-full max-w-[500px] rounded-xl overflow-hidden'>
      <div className='bg-gossip-color-01 p-4 text-gossip-dark-01'>
        <h2 className='text-3xl font-bold'>Create An Account</h2>
      </div>
      <div className='p-4'>
        <form onSubmit={handleSubmit}>
          <InputBox
            type='text'
            name='firstname'
            label='First Name'
            id='firstname'
            placeholder='Enter first name'
            inputError={formErrors?.firstname}
          />
          <InputBox
            type='text'
            name='lastname'
            label='Last Name'
            id='lastname'
            placeholder='Enter last name'
            inputError={formErrors?.lastname}
          />
          <InputBox
            type='email'
            name='email'
            label='Email'
            id='email'
            placeholder='Enter your email'
            inputError={formErrors?.email}
          />
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
          <SubmitBtn btnText='Signup Now' />
        </form>
        <p className='mt-2 flex gap-2'>
          <span>Already have an account?</span>
          <Link className='text-gossip-color-01' href='./login'>
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

Signup.Layout = AccountLayout;

export default Signup;
