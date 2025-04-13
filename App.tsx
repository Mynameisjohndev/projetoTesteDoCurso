import {SafeAreaView, StatusBar} from 'react-native';
import Routes from './src/routes/index.routes';
import './gesture-handler';
import AppContext from './src/context';

const App = () => {
  return (
    <AppContext>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <StatusBar barStyle={'light-content'} hidden />
        <Routes />
      </SafeAreaView>
    </AppContext>
  );
};

export default App;
