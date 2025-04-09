import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type AppRoutesTypes = {
  welcome: undefined;
  home: {
    user: {
      name: string;
      age?: string;
    }
  }
}

declare global {
  namespace ReactNavigation{
    interface RootParmList extends AppRoutesTypes{}
  }
}

export type AppScreenProps<T extends keyof AppRoutesTypes> = BottomTabScreenProps<AppRoutesTypes, T>;
