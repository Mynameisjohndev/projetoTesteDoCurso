import {Button, Container, Content, TextButton, Title} from './styles';
import { AppScreenProps } from '../../types/navigation';
import { useState } from 'react';
import { TextInput } from 'react-native';

const Home: React.FC<AppScreenProps<'home'>> = ({navigation, route}) => {
  // const {goBack} = navigation;
  const {params} = route;
  const [name, setName] = useState<string>('');

  console.log(params);

  return (
    <Container>
      <Content>
        <Title>{name}</Title>
        {/* <Button onPress={() => navigate('welcome')}> */}
        {/* <Button onPress={() => goBack()}>
          <TextButton>VAMOS LÁ</TextButton>
        </Button> */}
        <TextInput
          style={{backgroundColor: '#FF0000', width: '60%'}}
          value={name}
          onChangeText={setName}
        />
      </Content>
    </Container>
  );
};

export default Home;
