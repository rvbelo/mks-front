import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 101px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.blue};
  @media (max-width: 768px) {
    height: 48px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 28px 65px;
  @media (max-width: 768px) {
    margin: 12px 20px;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
  align-items: center;
`;

export const NameLogo = styled.text`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 19px;
  color: ${({ theme }) => theme.color.light};
    @media (max-width: 768px) {
      font-size: 32px;
  }
`;

export const Text = styled.text`
  margin-top: 16px;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 19px;
  color: ${({ theme }) => theme.color.light};
  @media (max-width: 768px) {
      font-size: 16px;
  }
`;
