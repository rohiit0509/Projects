import styled from "styled-components";

const MainSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-top: 80px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 300px;

  width: 80%;
  border-radius: 5px;
  box-shadow: 0px 0.8px 2px rgba(0, 0, 0, 0.032),
    0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08);
`;
const InputBox = styled.input`
  width: 500px;
  height: 60px;
  font-size: 20px;
  padding: 0 15px;
  outline: none;
  border: none;
  box-shadow: 0px 0.8px 2px rgba(0, 0, 0, 0.032),
    0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08);
`;
const Div = styled.div``;
const InputBoxBtn = styled.button`
  width: 100px;
  height: 60px;
  box-sizing: border-box;
  background-color: #60bafa;
  border: none;
  border-radius: 0 5px 5px 0;
  color: white;
  font-size: 18px;
  box-shadow: 0px 0.8px 2px rgba(0, 0, 0, 0.032),
    0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08);
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: 500;
  text-transform: uppercase;
`;
export {
  MainSectionWrapper,
  InputBox,
  InputBoxBtn,
  InputContainer,
  Title,
  Div,
};
