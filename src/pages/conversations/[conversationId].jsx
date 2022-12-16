import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { users } from "../../../demo/demousers";
import ChatHead from "../../components/Chat/ChatHead";
import Message from "../../components/Chat/Message";
import MessageInputBox from "../../components/Chat/MessageInputBox";
import ConversationLayout from "../../components/Conversations/ConversationLayout";

const ConversationId = () => {
  const router = useRouter();

  const { conversationId } = router.query;

  const [user, setUser] = useState({});

  useEffect(() => {
    if (conversationId) {
      const recUser = users.find((user) => user.id === conversationId);
      setUser(recUser);
    }
  }, [conversationId]);

  return (
    <div className='grid grid-rows-[64px_auto_70px] sm:grid-rows-[70px_auto_70px] h-screen bg-gossip-dark-01'>
      <ChatHead
        name={user.name}
        avatar={user.avatar}
        status={user.status}
        key={user.id}
      />
      <div className='p-3 flex flex-col gap-2 overflow-y-scroll text-white'>
        <Message type='incoming' />
        <Message type='outgoing' />
        <Message type='incoming' />
        <Message type='outgoing' />
        <Message type='incoming' />
        <Message type='outgoing' />
        <Message type='incoming' />
      </div>
      <MessageInputBox />
    </div>
  );
};

ConversationId.Layout = ConversationLayout;

export default ConversationId;
