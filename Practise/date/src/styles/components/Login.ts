import styled from "styled-components";

export const LoginWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 20px;
`;
export const InputContainer = styled.div`
  width: 100%;
  max-width: 300px;
  padding: 15px;
  box-shadow: 0px 0.8px 2px rgba(0, 0, 0, 0.032),
    0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08);
`;
export const Input = styled.input`
  font-size: 15px;
  outline: none;
  border: none;
  width: 100%;
`;
export const Button = styled.button<{varient?:string}>`
  width: 100%;
  max-width: 120px;
  background-color: ${(props)=>props.varient==="outline"?"#ffffff":"green"};
  color: ${(props)=>props.varient==="outline"?"green":"#ffffff"};
  border:${(props)=>props.varient==="outline"?"1px solid green":"none"};
  text-align: center;
  padding: 12px 15px;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
`;
