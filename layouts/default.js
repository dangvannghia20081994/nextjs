import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("components/layouts/header"), {
  ssr: false,
});
const Footer = dynamic(() => import("components/layouts/footer"), {
  ssr: false,
});
import { BackToTop } from "components/extra";
const Default = ({ children }) => {
  const router = useRouter();
  const blackList = [];
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    if (!user) {
      if (blackList.includes(router.pathname)) {
        router.push("/login");
      }
    }
  }, []);

  return (
    <div>
      <Header /> {children} <Footer />
      <BackToTop />
    </div>
  );
};
export default Default;
