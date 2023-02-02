import styled from "styled-components";

export const Card = styled.div`
width: 100%;
max-width: 217.56px;
height: 285px;
background: ${({theme})=> theme.color.light};
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
border-radius: 8px;
position: relative;
@media (max-width: 768px) {
max-width: 250.5px;
height: 328px;
  }
`;

export const Box = styled.div`
  width: 217.56px;
  height: 253.09px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 10px;
  img {
    transition: all 500ms cubic-bezier(1, 0.01, 0, 1.07);
    transition-timing-function: cubic-bezier(1, 0.01, 0, 1.07);
  }
  .link{
    text-decoration: none;
  }
  .picture{
    width: 115px;
    height: auto;
  }
  &:after{
    content: '';
    position: absolute;
    width: 100%;
    height: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0);
    z-index: 4;
    transition: all 500ms cubic-bezier(1, 0.01, 0, 1.07);
    transition-timing-function: cubic-bezier(1, 0.01, 0, 1.07);
  }
    @media (max-width: 768px) {
margin-left: 12px;
margin-top: 20px;
margin: 20px 0px 0px 12px;
  }
`;

export const Content = styled.div`
width: 100%;
padding: 14px 12px 16px 11.56px;
display: flex;
justify-content: space-between;
align-items: center;
`

export const Title = styled.text`
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: ${({ theme }) => theme.color.boldGray};
`

export const ContainerPrice = styled.div`
padding: 4px 2px;
width: 64px;
height: 26px;
text-align: center;
background: ${({ theme }) => theme.color.gray};
border-radius: 5px;
`

export const Price = styled.text`
font-weight: 700;
font-size: 14px;
line-height: 15px;
color: ${({ theme }) => theme.color.light};
`

export const Description = styled.text`
font-weight: 300;
font-size: 10px;
line-height: 12px;
padding: 0px 12px;
color: ${({ theme }) => theme.color.boldGray};
`

export const Button = styled.button`
width: 218px;
height: 31.91px;
display: flex;
border: none;
gap: 14px;
justify-content: center;
padding: 9px 0px;
background: ${({ theme }) => theme.color.blue};
border-radius: 0px 0px 8px 8px;
cursor: pointer;
  &:hover  {
    transition: ease 0.4s all;
    background: ${({ theme }) => theme.color.Hoverblue};
  }
  @media (max-width: 768px) {
  width: 250.5px;
  height: 36.72px;
  position: absolute;
  bottom: 0px;
  }
`

export const Buy = styled.text`
font-weight: 600;
font-size: 14px;
line-height: 18px;
color: ${({ theme }) => theme.color.light};
`