import Link from "next/link";
import { FiMoreVertical } from "react-icons/fi";
import Avatar from "./Avatar";

const ChatProfileSmall = ({ name, avatar, lastMsg, numOfUnreadMsg, id }) => {
  return (
    <Link href={`/conversations/${id}`}>
      <div className='flex items-center justify-between border border-gossip-dark-02 p-1 rounded-md relative'>
        <Avatar src={avatar} alt='' />
        <div className='flex-grow min-h-[50px] ml-2'>
          <h3 className='font-bold text-lg'>{name}</h3>
          {lastMsg && (
            <p className='opacity-90'>
              {lastMsg.length < 25 ? lastMsg : lastMsg.substring(0, 25) + "..."}
            </p>
          )}
        </div>
        {numOfUnreadMsg && numOfUnreadMsg !== 0 && (
          <span className='text-sm bg-gossip-dark-03 p-[2px] rounded-sm leading-none'>
            {numOfUnreadMsg}
          </span>
        )}
        <button>
          <FiMoreVertical size='25px' />
        </button>
      </div>
    </Link>
  );
};

export default ChatProfileSmall;
