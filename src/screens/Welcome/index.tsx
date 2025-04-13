import Image from '../../assets/svgs/ilustratation.svg';
// import Home from '../../assets/svgs/home.svg';
import {
  Button,
  Container,
  Content,
  SubTitle,
  TextButton,
  Title,
} from './styles';
import React, {useEffect} from 'react';
import {AppScreenProps} from '../../types/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Welcome: React.FC<AppScreenProps<'welcome'>> = ({navigation}) => {
  const {navigate} = navigation;

  const getStorageUser = async () => {
    const res = await AsyncStorage.getItem('@user');
    if (res) {
      const user = JSON.parse(res);
      console.log(user);
    }else{
      console.log('Não possui usuário');
    }
  };

  useEffect(() => {
    getStorageUser();
  }, []);

  return (
    <Container>
      <Image width={300} height={300} />
      {/* <Home width={300} height={300} fill={'red'} /> */}
      <Content>
        <Title>BEM-VINDO</Title>
        <SubTitle>
          Para aprender mais, continue assistindo as aulas e praticando para
          aprender todo conteúdo!
        </SubTitle>
        <Button
          onPress={() =>
            navigate('home', {
              user: {
                name: 'João Antônio',
                age: '25',
              },
            })
          }>
          <TextButton>VAMOS LÁ</TextButton>
        </Button>
      </Content>
    </Container>
  );
};

export default Welcome;
