import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  @media (max-width: 768px) {
    padding-top: 18px;
  }
`;

export const Row = styled.div`
  max-width: 1060px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;
