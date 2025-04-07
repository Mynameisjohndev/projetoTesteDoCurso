import {SafeAreaView, StatusBar} from 'react-native';
import Routes from './src/routes/index.route';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <StatusBar barStyle={'light-content'} hidden/>
      <Routes />
    </SafeAreaView>
  );
};

export default App;
