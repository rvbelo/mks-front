import styled from "styled-components";
import { CloseCircle } from "@styled-icons/ionicons-sharp/CloseCircle";

export const Card = styled.div`
  width: 100%;
  height: 95px;
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.color.light};
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-bottom: 16px;
  position: relative;
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

export const Box = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0px 15px;
  @media (max-width: 768px) {
    flex-direction: column;
    .img {
      width: 140px;
      height: 135px;
    }
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0px 10px;
  @media (max-width: 768px) {
    justify-content: space-between;
    
  }
`;

export const CloseIcon = styled(CloseCircle)`
  position: absolute;
  top: -6px;
  right: -6px;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const CloseX = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    font-size: 30px;
    color: #000;
    position: absolute;
    top: 2px;
    right: 10px;
    cursor: pointer;
  }
`;

export const Title = styled.text`
  width: 100%;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  padding-left: 21px;
  padding-right: 9px;
  color: #2c2c2c;
  @media (max-width: 768px) {
    font-size: 18px;
    padding-left: 10px;
    padding-right: 0px;
    margin-bottom: 10px;
  }
`;

export const Price = styled.text`
  width: 100%;
  max-width: 62px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.color.dark};
  @media (max-width: 768px) {
    width: 98px;
    height: 34.5px;
    padding-top: 8px;
    margin-bottom: 12px;
    border-radius: 5px;
    text-align: center;
    color: ${({ theme }) => theme.color.light};
    background-color: ${({ theme }) => theme.color.gray};
  }
`;
