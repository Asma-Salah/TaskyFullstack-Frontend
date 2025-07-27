import type React from "react";
import { useEffect } from "react";
import useUser from "../store/userStore";
import { useNavigate } from "react-router-dom";

function Protected({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  return <>{children}</>;
}
export default Protected;
