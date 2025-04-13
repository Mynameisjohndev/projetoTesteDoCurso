import IContext from '../types/context';
import { UserContextProvider } from './userContext';

const AppContext = ({children}: IContext) => {
  return(
    <UserContextProvider>
      {children}
    </UserContextProvider>
  );
};

export default AppContext;
