import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import image from '../../assets/imgs/image.png';

const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={image} />
      <View style={styles.content}>
        <Text style={styles.title}>BEM-VINDO</Text>
        <Text style={styles.subtitle}>
          Para aprender mais, continue assistindo as aulas e praticando para
          aprender todo conteúdo!
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>VAMOS LÁ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  content:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '90%',
  },
  title: {
    color: 'black',
    fontWeight:'bold',
    fontSize: 60,
  },
  subtitle: {
    color: '#8C8C8E',
    fontSize: 20,
  },
  button:{
    backgroundColor: '#FFB701',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 200,
    borderRadius: 25,
    marginTop: 60,
  },
  textButton: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Welcome;
