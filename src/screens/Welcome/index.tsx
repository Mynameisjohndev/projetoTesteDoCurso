import {Image} from 'react-native';
import image from '../../assets/imgs/image.png';
import { Button, Container, Content, SubTitle, TextButton, Title } from './styles';

const Welcome = () => {
  return (
    <Container>
      <Image source={image} />
      <Content>
        <Title>BEM-VINDO</Title>
        <SubTitle>
          Para aprender mais, continue assistindo as aulas e praticando para
          aprender todo conteúdo!
        </SubTitle>
        <Button>
          <TextButton>VAMOS LÁ</TextButton>
        </Button>
      </Content>
    </Container>
  );
};

export default Welcome;
