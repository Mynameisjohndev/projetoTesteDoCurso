import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  padding: 20px;
`;

const Content = styled.View`
  align-items: center;
  justify-content: center;
  width: 90%;
`;

const Title = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 50px;
`;

const SubTitle = styled.Text`
  color: #8C8C8E;
  font-size: 20px;
`;

const Button = styled.TouchableOpacity`
  background-color: #FFB701;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 200px;
  border-radius: 25px;
  margin-top: 60px;
`;

const TextButton = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 20px;
`;


export {
  Container,
  Content,
  Title,
  SubTitle,
  Button,
  TextButton,
};
