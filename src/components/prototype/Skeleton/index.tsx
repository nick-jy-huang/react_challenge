import S from "react-loading-skeleton";

const Skeleton = ({
  width,
  height = 40,
}: {
  width?: number | string;
  height?: number | string;
}) => {
  return <S width={width} height={height} baseColor={"#d6d6d6"} />;
};

export default Skeleton;
