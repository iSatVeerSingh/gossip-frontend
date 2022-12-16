import { useRouter } from "next/router";
import { users } from "../../../demo/demousers";
import Loading from "../../components/Loading/Loading";
import ChatProfileSmall from "../../components/Profile/ChatProfileSmall";
import UserProfileSmall from "../../components/Profile/UserProfileSmall";
import ProfileSearchBar from "../../components/SearchBar/ProfileSearchBar";
import { useIsDesktop } from "../../hooks/useIsDesktop";

const Conversations = () => {
  const router = useRouter();

  const isDesktop = useIsDesktop();

  if (isDesktop) {
    router.push("/conversations/1");
  }

  return isDesktop === undefined ? (
    <Loading />
  ) : (
    <div className='grid h-screen grid-rows-[70px_60px_auto] bg-gossip-dark-01 text-white'>
      <UserProfileSmall
        name='SatVeer Singh'
        avatar='/images/img02.jpg'
        status='This i smy statuu'
      />
      <ProfileSearchBar />
      <div className='overflow-y-scroll p-2 grid gap-1'>
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
  );
};

export default Conversations;
