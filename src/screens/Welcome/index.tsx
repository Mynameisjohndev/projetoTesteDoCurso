import { useNavigation } from '@react-navigation/native';
import Image from '../../assets/svgs/ilustratation.svg';
// import Home from '../../assets/svgs/home.svg';
import { Button, Container, Content, SubTitle, TextButton, Title } from './styles';

const Welcome = () => {

  const {navigate} = useNavigation();

  return (
    <Container>
      <Image width={300} height={300}/>
      {/* <Home width={300} height={300} fill={'red'} /> */}
      <Content>
        <Title>BEM-VINDO</Title>
        <SubTitle>
          Para aprender mais, continue assistindo as aulas e praticando para
          aprender todo conteúdo!
        </SubTitle>
        <Button onPress={()=>navigate('home', {
          user: {
            name: 'João Antônio',
            age: '25',
          },
        })}>
          <TextButton>VAMOS LÁ</TextButton>
        </Button>
      </Content>
    </Container>
  );
};

export default Welcome;
