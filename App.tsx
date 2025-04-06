import {SafeAreaView, StatusBar} from 'react-native';
import Welcome from './src/screens/Welcome';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <StatusBar barStyle={'light-content'} hidden/>
      <Welcome />
    </SafeAreaView>
  );
};

export default App;
