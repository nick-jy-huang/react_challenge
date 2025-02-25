import { TitleContainer } from "./style";
import userImage from "@/assets/user.png";
import Skeleton from "@/components/prototype/Skeleton";

const Title = ({
  name,
  onlineUsers,
  totalUsers,
}: {
  name: string;
  onlineUsers: number;
  totalUsers: number;
}) => {
  return (
    <TitleContainer>
      <h4>{name ?? <Skeleton width={200} />}</h4>

      {totalUsers ? (
        <>
          <img src={userImage} width={"28px"} height={"28px"} />
          <h4>
            {onlineUsers}/{totalUsers}
          </h4>
        </>
      ) : (
        <Skeleton width={200} />
      )}
    </TitleContainer>
  );
};

export default Title;
