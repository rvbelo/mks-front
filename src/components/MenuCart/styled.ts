import styled from "styled-components";
import { CloseCircle } from "@styled-icons/ionicons-sharp/CloseCircle";

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 25px;
  width: 100%;
  padding: 40px 12px 0px 40px;
  @media (max-width: 768px) {
    padding-top: 20px;
  }
`;

export const CloseIcon = styled(CloseCircle)`
  cursor: pointer;
  width: 38px;
  margin-top: -20px;
`;

export const StyledModal = styled.div`
  width: 486px;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.blue};
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    width: 315px;
  height: 100vh;

  }
`;

export const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Tbody = styled.tbody`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 40px;
  overflow:auto; 
`;

export const Tr = styled.tr`
  width: 100%;
`;

export const Tfoot = styled.tfoot`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  text-align: center;
  bottom: 0%;
`;
export const Value = styled.div`
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  width: 486px;
  height: 97px;
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;
  border:none;
  color: ${({ theme }) => theme.color.light};
  background: ${({ theme }) => theme.color.dark};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.text`
  font-weight: 700;
  font-size: 27px;
  line-height: 33px;
  color: ${({ theme }) => theme.color.light};
`;

export const Text = styled.text`
  font-weight: 700;
  font-size: 28px;
  color: ${({ theme }) => theme.color.light};
`;
