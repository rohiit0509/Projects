import styled from "styled-components";

const Question = styled.div`
  text-align: justify;
  border-bottom: 1px solid #e5e7eb;
  padding: 2rem 5rem;
  font-size: 1.2rem;
  transition: all .4s ease;
  z-index:1;
  background:white;
  overflow:hidden;
`;
const Answer = styled.div`
  text-align: justify;
  padding: 2rem;
  font-size: 1.2rem;
  max-width: 700px;
  transition: opacity .4s ease;
  z-index:-5;
  color:rgba(0,0,0,.7);
 
`;
const FlexboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  box-shadow: 0px 0.8px 2px rgba(0, 0, 0, 0.032),
    0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08);
  cursor: pointer;
`;

export { Question, Flexbox, FlexboxContainer, Answer };
