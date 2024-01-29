import MainHome from "./home";

import MetaComponent from "@/components/common/MetaComponent";
import Wrapper from "@/components/layout/Wrapper";

const metadata = {
  title: "Главная страница || GoBoston - Развиваемся в пути",
  description: "GoBoston - Развиваемся в пути",
}

export default function Home() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Wrapper>
        <MainHome />
      </Wrapper>
    </>
  );
}
