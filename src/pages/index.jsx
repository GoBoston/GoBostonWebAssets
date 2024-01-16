import Wrapper from "@/components/layout/Wrapper";
import MainHome from "./home";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Home-1 || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

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
