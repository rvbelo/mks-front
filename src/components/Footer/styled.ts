import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.lighGray};
  @media (max-width: 768px) {
position: sticky;
bottom: 0%;
  }
`;

export const Box = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const Text = styled.text`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.color.dark};
`;
