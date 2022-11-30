import styled from 'styled-components'; 


export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${(props) => props.theme.colors.primary};
    margin-top: 40px;
    text-align: center;

    @media (max-width: 720px) {
      font-size: 28px;
    }
  }
  
  p {

    font-size: 20px;
    margin-top: 24px;
    line-height: 32px;

    @media (max-width: 720px) {
      font-size: 16px;
      margin-top: 0;
    }
  }

  img {
    width: 25%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  line-height: -20px;
`;

export const Title = styled.h3`
  justify-content: center;
  align-items: center;
  margin-top: 15%;
`;

export const Input = styled.input`
  border-radius: 8px;
  background: transparent;
  border: 2px solid #e3e3e3;
  color: ${props => props.theme.colors.text};
`;

export const Button = styled.button`
  margin-top: 30px;
  width: 40%;
  height: 40px;

  border-radius: 8px;
  border: 2px solid #e3e3e3;
  background-color: ${props => props.theme.colors.primary};
`;

export const Card = styled.div`
  height: 100%;
  width: 16rem;
  box-shadow: 1px;
  border: 2px solid #e3e3e3;
  margin-top: 20px;
  padding: 10px;
  margin-right: 10px;

  p {
    margin-top: 0px;
    font-size: 15px;
  }
`;

export const GetForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  line-height: -20px;
`;