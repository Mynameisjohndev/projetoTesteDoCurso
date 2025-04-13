import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import IContext from '../types/context';

type User = {
  name: string;
  age: string;
}

interface IUserContext{
  user: User | null;
  setUser: Dispatch<SetStateAction< User | null>>
}

const UserContext = createContext({} as IUserContext);

const UserContextProvider = ({children}: IContext) => {
  const [user, setUser] = useState<User | null>(null);

  return(
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () =>{
  const context = useContext(UserContext);
  return context;
};

export {UserContextProvider, useUserContext};
