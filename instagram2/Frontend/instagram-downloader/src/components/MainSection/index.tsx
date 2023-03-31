import {
  MainSectionWrapper,
  InputBox,
  InputBoxBtn,
  InputContainer,
  Title,
  Div
} from "../../styles/components/MainSection";
const MainSection = () => {
  return (
    <MainSectionWrapper>
      <InputContainer>
     <Title>Instagram Downloader</Title>
     <Div>
        <InputBox
          type="text"
          placeholder="Enter instagram link here"
          name="linkInputBox"
        />
        <InputBoxBtn>Download</InputBoxBtn>
        </Div>  
      </InputContainer>
    </MainSectionWrapper>
  );
};

export default MainSection;
