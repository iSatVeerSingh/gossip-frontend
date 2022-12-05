import { FiMoreVertical } from "react-icons/fi";
import Avatar from "./Avatar";

const UserProfileSmall = () => {
  return (
    <div className='p-3 bg-gossip-dark-02 flex items-center justify-between gap-2'>
      <Avatar src='/images/img01.jpg' alt='' />
      <div className="flex-grow min-h-[50px]">
        <h3 className="font-bold text-lg">SatVeer Singh</h3>
        <p className="text-sm text-gossip-dark-06">This is sataus</p>
      </div>
      <div>
        <button>
          <FiMoreVertical size="25px" />
        </button>
      </div>
    </div>
  );
};

export default UserProfileSmall;
