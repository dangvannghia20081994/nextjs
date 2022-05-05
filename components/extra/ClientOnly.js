import { useState, useEffect } from "react";

const ClientOnly = ({ children }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return;
  }
  return children;
};

export default ClientOnly