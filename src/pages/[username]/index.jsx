import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiEdit, FiUserPlus } from "react-icons/fi";
import { useSelector } from "react-redux";
import IconButton from "../../components/Buttons/IconButton";
import ProfileNotFound from "../../components/NotFound/ProfileNotFound";
import Avatar from "../../components/Profile/Avatar";
import { useGetUserProfileQuery } from "../../services/userAccountApi";

const Profile = () => {
  const router = useRouter();

  const { id } = useSelector((state) => state.user.loggedInUser);

  const username = router.query.username;

  const [user, setUser] = useState({});

  const { data, isError, isFetching, isSuccess, isUninitialized, error } =
    useGetUserProfileQuery(username, {
      skip: username === undefined,
    });

  useEffect(() => {
    if (!isUninitialized && isSuccess) {
      setUser(data?.data);
      return;
    }
  }, [isFetching]);

  if (!isUninitialized && isError) {
    return <ProfileNotFound />;
  }

  return (
    <div className='bg-gossip-dark-01 px-2 py-3 text-white h-screen'>
      <div className='max-w-[800px] mx-auto p-3 bg-gossip-dark-02 rounded-md'>
        <div className='flex gap-4'>
          <div>
            <Avatar src={user.avatar} className='w-48 h-48 mb-3' />
            {user.id === id ? (
              <IconButton btnText='Edit Profile' icon={<FiEdit />} className="w-full" />
            ) : (
              <IconButton btnText='Connect' icon={<FiUserPlus />} className="w-full" />
            )}
          </div>
          <div className=''>
            <h2 className='text-4xl font-semibold'>
              {user.firstname + " " + user.lastname}
            </h2>
            <p className='text-lg text-gossip-dark-06'>@{user.username}</p>
            <p>{user.status}</p>
            <h3 className='text-gossip-dark-06 text-xl mt-3'>About</h3>
            <p className='opacity-90'>{user.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
