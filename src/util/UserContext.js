import { createContext } from "react";

const UserContext = createContext({
  currentUser: "defualt",
});

export default UserContext;
