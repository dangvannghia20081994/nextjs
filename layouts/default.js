import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useSocket } from "~/common/hook";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("components/layouts/header"), {
  ssr: false,
});
const Footer = dynamic(() => import("components/layouts/footer"), {
  ssr: false,
});
import { BackToTop } from "components/extra";
const Default = ({ children }) => {
  const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL;
  const socket = useSocket(socketUrl);
  const router = useRouter();
  const blackList = [];
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    if (socket) {
      window.socket = socket;
      socket.on("SOME_EVENT", (data) => {
        console.log(data);
      });
    }
    if (!user) {
      if (blackList.includes(router.pathname)) {
        router.push("/login");
      }
    }
    return () => {
      if (socket) socket.disconnect();
    };
  }, [socket]);

  return (
    <div>
      <Header /> {children} <Footer />
      <BackToTop />
    </div>
  );
};
export default Default;
