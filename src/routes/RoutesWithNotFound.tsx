import type { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Paths } from "./paths";
import { NotFound } from "@/pages";

interface Props {
  children: ReactNode;
}

export const RoutesWithNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<Navigate to={Paths.NOTFOUND} />} />
      <Route path={Paths.NOTFOUND} element={<NotFound />} />
    </Routes>
  );
};
