import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const { push } = useRouter();
  const signed = false;
  const loading = true;

  useEffect(() => {
    if (!signed) push("/sign-in");
  }, []);

  if (loading) return <></>;

  return <div>oi</div>;
};

export default Home;
