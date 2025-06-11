import { Paths } from "@/routes";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <h1>404! The page you are looking for does not exists</h1>
      <button>
        <Link to={Paths.HOME}>Return home</Link>
      </button>
    </>
  );
};
