import {
  DownloadSectionWrapper,
  Para,
  DownloadContainer,
  TextContainer,
  H1,
  Img
} from "../../styles/components/DownloadSection";
import Background from "../../assets/Group 5.svg";
const DownloadSection = () => {
  return (
    <DownloadSectionWrapper>
      <Para>Download Photos, Reels, Videos, IGTV & carousel</Para>
      <DownloadContainer>
        <Img src={Background} alt="background-img" />
        <TextContainer>
          <H1>Download Instagram <span style={{color:"#EA8783"}}>Videos</span> and <span style={{color:"#A69DFF"}}>Photos</span></H1>
          <Para style={{width:"600px", textAlign: "justify"}}>
            <strong>EasyDownlaod</strong> is an online web tool that helps you download Instagram
            Photos, Videos, Reels, and IGTV videos. EasyDownlaod is designed to be easy
            to use on any device, such as a mobile phone, tablet, or computer.
          </Para>
        </TextContainer>
      </DownloadContainer>
    </DownloadSectionWrapper>
  );
};

export default DownloadSection;
