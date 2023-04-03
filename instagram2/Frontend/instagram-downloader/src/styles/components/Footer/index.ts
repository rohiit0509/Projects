import styled from "styled-components";

const FooterWrapper = styled.div`
margin-top:100px;
display: flex;
justify-content:space-around;
align-items:center;
box-shadow: 0px 0.8px 2px rgba(0, 0, 0, 0.032),
    0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08);
    height:80px;
`
const Link = styled.a`
font-size:18px;
cursor: pointer;
transition: all .3s ease;
&:hover{
    color:#60bafa;
}
`
const LinkWrapper = styled.div`
display: flex;
gap:50px;
`
export {FooterWrapper, Link, LinkWrapper}