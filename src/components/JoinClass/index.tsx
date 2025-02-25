import CopyButton from "@/components/prototype/CopyButton";
import Skeleton from "@/components/prototype/Skeleton";

import {
  JoinClassContainer,
  BackTo,
  Title,
  InfoContainer,
  InfoBlock,
  QRContainer,
  QRBox,
  VersionText,
} from "./style";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

import { LazyLoadImage } from "react-lazy-load-image-component";

const JoinClass = () => {
  const data = useSelector((state: RootState) => state?.classInfo?.info);

  const qrLink = data.link
    ? `https://api.qrserver.com/v1/create-qr-code/?size=630x630&data=${data.link}`
    : "";

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`Copy: ${text} success`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <JoinClassContainer>
      <BackTo>{"＜"} Back to Class List</BackTo>
      <Title>
        {data.title ? `Join ${data.title}` : <Skeleton width={"28%"} />}
      </Title>

      <InfoContainer>
        <InfoBlock>
          {data.id ? (
            <>
              ID : {data.id}
              <CopyButton onClick={() => handleCopy(data.id)} />
            </>
          ) : (
            <Skeleton width={250} />
          )}
        </InfoBlock>
        <InfoBlock>
          {data.link ? (
            <>
              Link <CopyButton onClick={() => handleCopy(data.link)} />
            </>
          ) : (
            <Skeleton width={250} />
          )}
        </InfoBlock>
      </InfoContainer>

      <QRContainer>
        <QRBox>
          {qrLink ? (
            <LazyLoadImage
              src={qrLink}
              width={"630px"}
              height={"630px"}
              effect="blur"
              alt="qr link"
            />
          ) : (
            <Skeleton height={"630px"} />
          )}
        </QRBox>
      </QRContainer>

      <VersionText>Version 1.1.7</VersionText>
    </JoinClassContainer>
  );
};

export default JoinClass;
