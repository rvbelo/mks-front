import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  max-width: 60px;
  height: 19px;
  gap: 4px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-start;
`;

export const Div = styled.div`
  display: flex;
  width: 100%;
  padding: 4px 2px;
  justify-content: start;
  align-items: center;
  background: ${({ theme }) => theme.color.light};
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;
  @media (max-width: 768px) {
    width: 98px;
    height: 40px;
    justify-content: space-between;
  .icon{
    width: 24px;
    height: 24px;
  }
  }
`;

export const Text = styled.text`
  font-weight: 400;
  font-size: 7px;
  line-height: 6px;
  color: ${({ theme }) => theme.color.dark};
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Input = styled.input`
  width: 30px;
  height: 16px;
  border: none;
  padding-left: 7px;
  font-weight: 400;
  font-size: 12px;
  line-height: 10px;
  color: ${({ theme }) => theme.color.dark};
  text-align: center;
  border-right: 1px solid #a2a2be;
  border-left: 1px solid #a2a2be;
  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 2px;
  }
`;

export const Button = styled.button`
  display: flex;
  border: none;
  justify-content: center;
  cursor: pointer;
  background: #ffffff;
  &:hover {
    transition: ease 0.4s all;
    background: ${({ theme }) => theme.color.lighGray};
  }
`;
