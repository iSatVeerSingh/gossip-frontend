import { FiMoreVertical } from "react-icons/fi";
import Avatar from "./Avatar";

const UserProfileSmall = ({ name, status, avatar }) => {
  return (
    <div className='p-3 bg-gossip-dark-02 flex items-center justify-between gap-2'>
      <Avatar src={avatar} alt='' />
      <div className='flex-grow min-h-[50px]'>
        <h3 className='font-bold text-lg'>{name}</h3>
        <p className='text-sm text-gossip-dark-06'>{status}</p>
      </div>
      <div>
        <button>
          <FiMoreVertical size='25px' />
        </button>
      </div>
    </div>
  );
};

export default UserProfileSmall;
