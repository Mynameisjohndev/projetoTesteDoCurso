import {Button, Container, Content, TextButton, Title} from './styles';
import { AppScreenProps } from '../../types/navigation';
import { useEffect, useState } from 'react';
import { Alert, TextInput } from 'react-native';

const Home: React.FC<AppScreenProps<'home'>> = ({navigation, route}) => {
  // const {goBack} = navigation;
  const {params} = route;


  useEffect(()=>{
    if(params.user && params.user.name){
      const {name} = params.user;
      Alert.alert('ATENÇÃO', `SEU USUÁRIO É: ${name}`);
    }
  },[params]);

  return (
    <Container>
      <Content />
    </Container>
  );
};

export default Home;
