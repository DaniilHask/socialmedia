import Container from "../layout/Container";
import Title from "../components/Title/Title";
import Image from "next/image";
import OrbitingCircles from "../components/OrbitingCircles/OrbitingCircles";
import EngagementCard from "../components/EngagementCard/EngagementCard";

export default function Advice() {
  return (
    <section>
      <Container className="flex flex-col justify-center gap-[62px] pt-[63px] pb-[28px] xl:px-[75px] xl:pb-[115px]">
        <div className="flex flex-col xl:flex-row items-center gap-[38px] xl:gap-[80px]">
          <div className="w-full xl:w-1/2 flex justify-center xl:flex xl:justify-center">
            <OrbitingCircles/>
          </div>
          <div className="w-full xl:w-1/2 flex justify-center">
            <Title
              title="Bring your target users together on social media"
              subtitle="Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit vehicula in ut id donec urna.Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit vehicula in ut id donec urna."
              textPosition="left"
              titleSize="text-[25.84px] xl:text-[40px]"
              textSize="text-[10.74px] xl:text-[16px]"
              subtitleWidth="w-[289px] xl:w-[595px]"
              className="flex flex-col"
              titleWidth="flex w-[313px] xl:w-[500px]"
              visionText={true}
              subtitleMore="Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit vehicula in ut id donec urna.Lorem ipsum dolor sit amet "
              secondTitle={false}
            />
          </div>
        </div>

        <div className="flex flex-col xl:flex-row-reverse items-center justify-between gap-[38px] xl:gap-[80px]">
          <div className="w-full xl:w-1/2 flex justify-center">
            <EngagementCard/>
          </div>
          <div className="xl:w-1/2">
            <Title
              title="Build your brand & reach out to social followers"
              subtitle="Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit vehicula in ut id donec urna.Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit vehicula in ut id donec urna."
              textPosition="left"
              titleSize="text-[26.84px] xl:text-[40px]"
              textSize="text-[10.74px] xl:text-[16px]"
              titleWidth="w-[340px] xl:w-[490px] xl:flex xl:justify-center"
              subtitleWidth="w-[289px] xl:w-[590px]"
              visionText={true}
              className="flex flex-col"
              subtitleMore="Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit vehicula in ut id donec urna.Lorem ipsum dolor sit amet "
              secondTitle={false}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
