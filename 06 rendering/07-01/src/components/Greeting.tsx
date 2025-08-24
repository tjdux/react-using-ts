import UserView from "./UserView";
import UserInfoView from "./UserInfoView";
import GuestView from "./GuestView";

export default function Greeting({ isLoggedIn }: { isLoggedIn: boolean }) {
  if (isLoggedIn)
    return (
      <>
        <UserView />
        <UserInfoView />
      </>
      // null
    );
  else return <GuestView />;
}
