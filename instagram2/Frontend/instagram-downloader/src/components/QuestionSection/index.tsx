import {  useState } from "react";
import {
  Question,
  Flexbox,
  FlexboxContainer,
  Answer,
} from "../../styles/components/QuestionSection";
const QuestionSection = () => {
  const list = [
    {
      id: 0,
      question: "What is an Instagram Video Downloader?",
      answer: `It's an online tool (web application) that lets you download Instagram photos, videos, reels, and IGTV videos. In case you need to use it later offline. The iGram Instagram downloader is the best tool for downloading from Instagram.`,
      isopen: false,
    },
    {
      id: 1,
      question: "What type of file formats does iGram support for downloading?",
      answer: `The most convenient these days is the jpg file format for downloading images. As for the videos, the .mp4 file format is still considered the most popular worldwide, ensuring high quality and a small video file size.`,
      isopen: false,
    },
    {
      id: 2,
      question: "What devices are compatible with the iGram Downloader?",
      answer: `The iGram Downloader is compatible with any device with an installed browser. You can use iGram from any device, like a mobile phone, smartphone, tablet, notebook, laptop, or PC. Also, it's run on Mac OS, Windows, iOS, and Linux. It has been tested and works well with Chrome, Firefox, Opera, Safari, and Chromium. Desktop and mobile versions.`,
      isopen: false,
    },
    {
      id: 3,
      question: "Are there any limits on the number of videos I can download?",
      answer: `No! You can download as many videos as you wish.`,
      isopen: false,
    },
    {
      id: 4,
      question: "Can I save other than video content on this site?",
      answer: `Sure! Photos, Videos, Reels, and IGTV can be downloaded from Instagram for free. iGram supports only Instagram, and other sources are not supported.`,
      isopen: false,
    },
    {
      id: 5,
      question: "How to Download Instagram Photos and Videos Online?",
      answer: `Nothing easier!
      Copy an Instagram photo or video URL
      Go back to iGram and paste it into the field, and press Download
      Shortly, you will see the results, pick the quality you need, and download.`,
      isopen: false,
    },
    {
      id: 6,
      question: "Can I Download Photos and Videos from Any User?",
      answer: `Yes! But only from public accounts. We respect the user's privacy/copyright. Downloading private videos through iGram is not available and will not be. But we are working on a new browser extension for desktop browsers to help you download private posts directly from Instagram.`,
      isopen: false,
    },
    {
      id: 7,
      question:
        "What is the highest quality of images and videos I can download?",
      answer: `The quality of photos and videos depends on the original uploaded image. Still, usually, the highest image resolution is 1080x1350 pixels, which is the limit of Instagram. As for the video, it is HD (720p) in most cases.`,
      isopen: false,
    },
    {
      id: 8,
      question: "Instagram Reels download is allowed?",
      answer: `The short answer is: Yes, from personal posts, it's possible to download Instagram Reels. You can easily download Instagram Reels from your account to your smartphone. You can only download reels for personal use. Downloading Instagram Reels Videos is allowed as long as they are not utilized for commercial purposes.`,
      isopen: false,
    },
  ];

  const [qlist, setQlist] = useState(list);

  const expand = (id:number) => {
    let newList = qlist.map((item) => {
      const newItem = item;
      if (item.id === qlist[id].id && item.isopen === true)
        newItem.isopen = false;
      else if (item.id === qlist[id].id && item.isopen === false)
        newItem.isopen = true;
      else newItem.isopen = false;
      return newItem;
    });
    setQlist(newList);
  };

  return (
    <FlexboxContainer>
      <Flexbox>
        {qlist.map((item, index) => {
          return (
            <>
              <Question
                onClick={() => expand(index)}
                style={{
                  height: item.isopen ? `150px` : `15px`,
                }}
              >
                {item.question}
                {item.isopen ? (
                  <Answer style={{ opacity: "1" }}>{item.answer}</Answer>
                ) : (
                  <Answer style={{ opacity: "0" }}>{item.answer}</Answer>
                )}
              </Question>
            </>
          );
        })}
      </Flexbox>
    </FlexboxContainer>
  );
};

export default QuestionSection;
