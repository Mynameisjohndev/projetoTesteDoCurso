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
import api from '../../services/api';

const Welcome: React.FC<AppScreenProps<'welcome'>> = ({navigation}) => {
  const {navigate} = navigation;

  const getDogs = () => {
    api
      .get('/breeds/list/all')
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDogs();
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
