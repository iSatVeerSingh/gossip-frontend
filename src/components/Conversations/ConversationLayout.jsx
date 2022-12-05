import { users } from "../../../demo/demousers";
import ChatProfileSmall from "../Profile/ChatProfileSmall";
import UserProfileSmall from "../Profile/UserProfileSmall";
import ProfileSearchBar from "../SearchBar/ProfileSearchBar";

const ConversationLayout = ({ children }) => {
  return (
    <div className='bg-gossip-dark-01 text-white h-screen grid grid-cols-[400px_auto]'>
      <div className='border-r border-gossip-dark-03 grid grid-rows-[70px_60px_auto] h-screen'>
        <UserProfileSmall />
        <ProfileSearchBar />
        <div className='p-2 overflow-y-scroll flex flex-col gap-1'>
          {users.map((user) => (
            <ChatProfileSmall
              key={user.id}
              id={user.id}
              avatar={user.avatar}
              lastMsg={user.lastMsg}
              name={user.name}
              numOfUnreadMsg={user.numOfUnreadMsg}
            />
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};

export default ConversationLayout;
