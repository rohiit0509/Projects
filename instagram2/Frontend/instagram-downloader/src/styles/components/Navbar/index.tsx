import styled from "styled-components";

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 150px;
  height:75px;
  background-color: #ffffff;
  box-shadow: 0px 0.8px 2px rgba(0, 0, 0, 0.032),
    0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08);
`;
const NavLogo = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 25px;
  color: #60bafa;
`;
const NavBtn = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 15px;
  font-weight: 500;
  border: 1.5px solid #60bafa;
  background-color: transparent;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  color: #60bafa;
  transition: all .3s linear;
  &:hover {
    background-color: #60bafa;
    color: #ffffff;
  }
`;
export { NavbarWrapper, NavLogo, NavBtn };
