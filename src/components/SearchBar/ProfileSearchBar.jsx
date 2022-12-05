import {FiSearch} from 'react-icons/fi'

const ProfileSearchBar = () => {
  return (
    <div className="p-2">
      <div className='flex items-center gap-1 border border-gossip-dark-03 py-2 px-1 rounded-sm' >
        <FiSearch size='25px' />
        <input type='search' name='profile-search' id='profile-search' className="outline-none bg-transparent w-full" placeholder="search in chats..." />
      </div>
    </div>
  );
};

export default ProfileSearchBar;
