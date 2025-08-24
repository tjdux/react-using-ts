// import GuestView from "./components/GuestView";
// import UserInfoView from "./components/UserInfoView";
// import UserView from "./components/UserView";

import Greeting from "./components/Greeting";

export default function App() {
  const isLoggedIn = true;

  return <Greeting isLoggedIn={isLoggedIn} />;
  // if (isLoggedIn)
  //   return (
  //     <>
  //       <UserView />
  //       <UserInfoView />
  //     </>
  //   );
  // else return <GuestView />;
}
