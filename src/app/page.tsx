import Image from "next/image";
import { IntroductionSection } from "./components/IntroductionSection";
import { ImportanceOfCounseling } from "./components/ImportanceOfCounseling";

export default function Home() {
  return (
    <>
      <IntroductionSection />
      <ImportanceOfCounseling />
    </>
  );
}
