import styled from "styled-components";

export const Box = styled.button`
  width: 90px;
  height: 45px;
  background: ${({ theme }) => theme.color.light};
  border-radius: 8px;
  border: none;
  padding: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  .icon {
    transition: ease 0.4s all;
  }
  &:hover .icon {
    color: ${({ theme }) => theme.color.blue};
  }
  @media (max-width: 768px) {
    width: 52px;
    height: 26px;
    padding: 8px;
  }
`;
export const Value = styled.text`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.color.dark};
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
