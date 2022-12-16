import { Grid } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <Grid height='50' width='50' color="gray" />
    </div>
  );
};

export default Loading;
