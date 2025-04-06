import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

const App = () => {

  interface ICard {
    value : 1|2|3|4
  }

  const Card = ({value}: ICard) => {
    return(
      <View style={value === 1 ? styles.card1 : value === 2 ? styles.card2 : styles.card3}>
        <Text style={styles.textCard} >{value}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row-reverse',
        // backgroundColor: 'black',
      }}>
      <StatusBar barStyle={'light-content'} backgroundColor={'purple'} />

        <Card value={1}/>
        <Card value={2}/>
        <Card value={3}/>
        <Card value={4}/>
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  card1: {
    width: 90,
    height: 90,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    margin: 10,
  },
  card2: {
    width: 90,
    height: 90,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    margin: 10,
  },
  card3: {
    width: 90,
    height: 90,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    margin: 10,
  },
  textCard:{
    color: 'white',
  },
});

export default App;
