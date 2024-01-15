import { FC } from "react";
import { useAuth } from "../hooks/useAuth";
import img from "/shield-with-lock-svgrepo-com.svg";
interface Props {
  children: JSX.Element;
}

const ProtectedRoute: FC<Props> = ({ children }) => {
  const isAuth = useAuth();
  return (
    <>
      {isAuth ? (
        children
      ) : (
        <div className="mt-20 flex-col items-center justify-center gap-10 flex">
          <h1 className="text-2xl">To view this page you mast be logged in</h1>
          <img className="w-1/3" src={img} alt="lock" />
        </div>
      )}
    </>
  );
};

export default ProtectedRoute;
