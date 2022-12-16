import { FiMoreVertical, FiPhone, FiSearch, FiVideo } from "react-icons/fi";
import Avatar from "../Profile/Avatar";

const ChatHead = ({ name, status, avatar }) => {
  return (
    <div className='p-2 bg-gossip-dark-02 text-white'>
      <div className='flex items-center gap-1 sm:gap-3'>
        <Avatar src={avatar} className="w-9 h-9 sm:w-11 sm:h-11"  alt='' />
        <div className='flex-grow min-h-[50px] ml-2'>
          <h3 className='font-bold sm:text-lg'>{name}</h3>
          <p className='opacity-90 text-sm sm:text-base'>{status}</p>
        </div>
        <div className='flex items-center gap-2 sm:gap-5'>
          <button>
            <FiSearch size='25px' />
          </button>
          <button>
            <FiVideo size='25px' />
          </button>
          <button>
            <FiPhone size='25px' />
          </button>
          <button>
            <FiMoreVertical size='25px' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatHead;
