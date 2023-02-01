import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-top: 40px;
  @media (max-width: 768px) {
    padding-top: 18px;
  }
`;

export const Row = styled.div`
  max-width: 1266px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;
