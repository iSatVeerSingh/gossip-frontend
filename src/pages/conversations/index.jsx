import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import ChatProfileSmall from "../../components/Profile/ChatProfileSmall";
import UserProfileSmall from "../../components/Profile/UserProfileSmall";
import ProfileSearchBar from "../../components/SearchBar/ProfileSearchBar";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import { useGetAllConnectionsByUserQuery } from "../../services/userAccountApi";

const Conversations = () => {
  const router = useRouter();

  const isDesktop = useIsDesktop();

  if (isDesktop) {
    router.push("/conversations/1");
  }

  const { data, isUninitialized, isFetching, isError, isSuccess, error } =
    useGetAllConnectionsByUserQuery();

  const [allConnections, setAllConnections] = useState(null);

  useEffect(() => {
    if (!isUninitialized && isError) {
      console.log(error);
    } else if (!isUninitialized && isSuccess) {
      if (data?.data?.connections) {
        setAllConnections(data?.data?.connections);
      }
    }
  }, [isFetching]);

  if (isUninitialized || (!isUninitialized && isFetching)) {
    return <Loading />;
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
        {/* {users.map((user) => (
          <ChatProfileSmall
            key={user.id}
            id={user.id}
            avatar={user.avatar}
            lastMsg={user.lastMsg}
            name={user.name}
            numOfUnreadMsg={user.numOfUnreadMsg}
          />
        ))} */}
        {allConnections === null ? (
          <h2>You don't have any connections</h2>
        ) : (
          allConnections.map((connection) => (
            <ChatProfileSmall key={connection.id} id={connection.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default Conversations;
