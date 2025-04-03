import {SafeAreaView, StatusBar, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <StatusBar barStyle={'light-content'} backgroundColor={'purple'} />
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
        }}>
        <Text>Hello Course!</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
