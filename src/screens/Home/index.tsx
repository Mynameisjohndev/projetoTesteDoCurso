import {Button, Container, Content, Input, TextButton} from './styles';
import { AppScreenProps } from '../../types/navigation';
import { useEffect, useRef } from 'react';
import { TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Home: React.FC<AppScreenProps<'home'>> = ({}) => {

  const inputRef = useRef<TextInput>(null);

  const handleClickButton = () => {
    inputRef.current?.focus();
  };

  const setStorageUser = () => {
    const user = {
      age: '35',
      name: 'João Antônio',
    };
    AsyncStorage.setItem('@user', JSON.stringify(user));
  };

  useEffect(() => {
    setStorageUser();
  }, []);

  return (
    <Container>
      <Content>
        <Input ref={inputRef}/>
        <Button onPress={handleClickButton}>
          <TextButton>CLICAR</TextButton>
        </Button>
      </Content>
    </Container>
  );
};

export default Home;
