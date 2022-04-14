import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ContainerList = styled.div`
  border-radius: 10px;
  background-color: ${props => props.theme.colors.secondary};
  width: 600px;
  margin: 5px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ImgSelect = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;
`
export const CardButton = styled.div`
  margin: auto;
  margin-top: 20px;
  width: 50px;  
`

