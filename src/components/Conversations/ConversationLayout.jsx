import { useSelector } from "react-redux";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Loading from "../Loading/Loading";
import Conversations from "../../pages/conversations";

const ConversationLayout = ({ children }) => {
  const { firstname, lastname, username, avatar, about, status } = useSelector(
    (state) => state.user.loggedInUser
  );

  const isDesktop = useMediaQuery("(min-width: 992px)");

  if (isDesktop === undefined) {
    return <Loading />;
  }

  return isDesktop ? (
    <div className='h-screen grid grid-cols-[400px_auto]'>
      <Conversations />
      {children}
    </div>
  ) : (
    <div>{children}</div>
  );
};

export default ConversationLayout;
