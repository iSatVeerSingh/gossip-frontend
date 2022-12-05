import { FiSend } from "react-icons/fi";
import { IoMdAttach } from "react-icons/io";
const MessageInputBox = () => {
  return (
    <div className='bg-gossip-dark-02 p-2 flex items-center gap-2'>
      <div className='border border-gossip-dark-03 flex items-center flex-grow rounded-md p-2'>
        <input
          type='text'
          name='message'
          id='message'
          placeholder='Type message here...'
          className='outline-none bg-transparent w-full'
        />
        <button>
          {/* <FiMic size='25px' /> */}
          <FiSend size='25px' />
        </button>
      </div>
      <button>
        <IoMdAttach size='25px' />
      </button>
    </div>
  );
};

export default MessageInputBox;
