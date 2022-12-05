import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { users } from "../../../demo/demousers";
import ChatHead from "../../components/Chat/ChatHead";
import Message from "../../components/Chat/Message";
import MessageInputBox from "../../components/Chat/MessageInputBox";
import ConversationLayout from "../../components/Conversations/ConversationLayout";

const Conversation = () => {
  const router = useRouter();

  const receiverId = router.query.receiver;

  const [user, setUser] = useState({});

  useEffect(() => {
    if (receiverId) {
      const recUser = users.find((user) => user.id === receiverId);
      setUser(recUser);
    }
  }, [receiverId]);

  return (
    <div className='grid grid-rows-[70px_auto_70px] h-screen'>
      <ChatHead name={user.name} avatar={user.avatar} status={user.status} />
      <div className='p-3 flex flex-col gap-2 overflow-y-scroll'>
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

Conversation.Layout = ConversationLayout;

export default Conversation;
