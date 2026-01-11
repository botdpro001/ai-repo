import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { WhySection } from "@/components/home/WhySection";
import { MissionSection } from "@/components/home/MissionSection";
import { PlatformsPreview } from "@/components/home/PlatformsPreview";

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <MissionSection />
      <WhySection />
      <PlatformsPreview />
    </Layout>
  );
}
