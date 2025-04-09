import {Button, Container, Content, TextButton, Title} from './styles';
import { AppScreenProps } from '../../types/navigation';

const Home: React.FC<AppScreenProps<'home'>> = ({navigation, route}) => {
  const {goBack} = navigation;
  const {params} = route;

  console.log(params);

  return (
    <Container>
      <Content>
        <Title>Home</Title>
        {/* <Button onPress={() => navigate('welcome')}> */}
        <Button onPress={() => goBack()}>
          <TextButton>VAMOS LÁ</TextButton>
        </Button>
      </Content>
    </Container>
  );
};

export default Home;
