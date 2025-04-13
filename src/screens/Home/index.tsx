import {Button, Container, Content, Input, TextButton} from './styles';
import { AppScreenProps } from '../../types/navigation';
import { useEffect, useRef } from 'react';
import { TextInput } from 'react-native';
import { useUserContext } from '../../context/userContext';
const Home: React.FC<AppScreenProps<'home'>> = ({}) => {

  const inputRef = useRef<TextInput>(null);
  const {setUser} = useUserContext();

  const handleClickButton = () => {
    inputRef.current?.focus();
  };

  useEffect(()=>{
    setUser({
      age: '35',
      name: 'João Antônio',
    });
  },[setUser]);

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
