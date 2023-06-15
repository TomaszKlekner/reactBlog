import CUser from "../../shared/user.model";

interface Props {
  user: CUser | null;
}

const PageNotFound = ({ user }: Props) => {
  return <div>PageNotFound</div>;
};

export default PageNotFound;
