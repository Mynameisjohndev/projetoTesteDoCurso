import {useNavigation, useRoute} from '@react-navigation/native';
import {Button, Container, Content, TextButton, Title} from './styles';

const Home = () => {
  const {navigate, goBack} = useNavigation();
  const {params} = useRoute();

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
