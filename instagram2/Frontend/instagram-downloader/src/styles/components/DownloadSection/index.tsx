import styled from "styled-components";

const DownloadSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
    margin-bottom: 180px;
`
const DownloadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08);
  border-radius: 15px;
  overflow: hidden;
  width: 75%;
  height: 500px;
`;
const Para = styled.p`
  font-size: 18px;
  text-align: center;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width:46%;

`;
const H1 = styled.h1`
font-size:45px;
max-width: 450px;
margin-bottom: 0;
color:#1f1e1e;
`;

const Img = styled.img`
  height:100%;
  object-fit:cover;
  width:50%;

`
export { DownloadSectionWrapper, Para, DownloadContainer, TextContainer, H1 , Img};
