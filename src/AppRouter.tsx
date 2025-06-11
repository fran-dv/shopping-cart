import { Navigate, Route } from "react-router-dom";
import { Paths } from "@/routes";
import { Cart, Home, Shop } from "@/pages";
import { RoutesWithNotFound } from "./routes/RoutesWithNotFound";

export const AppRouter = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={Paths.HOME} />} />
      <Route path={Paths.HOME} element={<Home />} />
      <Route path={Paths.SHOP} element={<Shop />} />
      <Route path={Paths.CART} element={<Cart />} />
    </RoutesWithNotFound>
  );
};
