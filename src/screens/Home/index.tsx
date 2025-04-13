import {Button, Container, Content, Input, TextButton} from './styles';
import { AppScreenProps } from '../../types/navigation';
import { useRef } from 'react';
import { TextInput } from 'react-native';
const Home: React.FC<AppScreenProps<'home'>> = ({}) => {

  const inputRef = useRef<TextInput>(null);

  const handleClickButton = () => {
    inputRef.current?.focus();
  };

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
