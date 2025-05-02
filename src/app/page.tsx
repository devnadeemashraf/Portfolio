import Header from "@/components/layout/landing-page/header";
import BentoBox from "@/components/sections/landing-page/bento-box";

export default function Home() {
  return (
    <section className="w-full h-full items-center justify-center">
      {/* Header - Only for Small Screens */}
      <Header />
      {/* Main Content of the Landing Page - The Bento Grid*/}
      <BentoBox />
    </section>
  );
}
