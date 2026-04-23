import Container from "../layout/Container";
import PromoteSocial from "../components/PromoteSocial/PromoteSocial";
import Title from "../components/Title/Title";

export default function Media() {
  return (
    <section className="pb-[41px]">
      <Container className="pt-[54px] xl:pt-[100px] xl:px-[75px]">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-[80px] mb-20 xl:mb-[100px]">
          <div className="w-full xl:w-1/2 flex justify-center">
            <PromoteSocial />
          </div>

          <div className="w-full xl:w-1/2 flex justify-center">
            <Title
              title="The easiest way to promote social media"
              subtitle="Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit vehicula in ut id donec urna.Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit vehicula in ut id donec urna."
              textSize="text-[11.47px]"
              textPosition="left"
              titleWidth="w-[304px] xl:w-[424px]"
              subtitleWidth="w-[310px] xl:w-[600px]"
              className="flex flex-col"
              visionText={true}
              titleSize="text-[28.69px] xl:text-[40px]"
              secondTitle={true}
              subtitleMore="Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit vehicula in ut id donec urna. Lorem ipsum dolor sit amet."
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-[100px] gap-y-11 ">
            <Title
              title="Q.What support and service package are available?"
              subtitle="Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit vehicula in ut id donec urna.Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit vehicula in ut id donec urna."
              textSize="text-[13.03px]"
              textPosition="left"
              titleWidth="w-[335px] xl:w-[506px]"
              subtitleWidth="w-[335px] xl:w-[605px]"
              visionText={false}
              titleSize="text-[16.29px] xl:text-[20px]"
              secondTitle={false}
            />

            <Title
              title="Q.How can i make the payment?"
              subtitle="Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit vehicula in ut id donec urna.Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit vehicula in ut id donec urna."
              textSize="text-[13.03px]"
              textPosition="left"
              titleWidth="w-[335px] xl:w-[313px]"
              subtitleWidth="w-[335px] xl:w-[605px]"
              visionText={false}
              titleSize="text-[16.29px] xl:text-[20px]"
              secondTitle={false}
            />

            <Title
              title="Q.How long will i have access to the service?"
              subtitle="Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit vehicula in ut id donec urna.Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit vehicula in ut id donec urna."
              textSize="text-[13.03px]"
              textPosition="left"
              titleWidth="w-[335px] xl:w-[430px]"
              subtitleWidth="w-[335px] xl:w-[605px]"
              visionText={false}
              titleSize="text-[16.29px] xl:text-[20px]"
              secondTitle={false}
            />

            <Title
              title="Q.Do you provide any refound?"
              subtitle="Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit vehicula in ut id donec urna.Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit vehicula in ut id donec urna."
              textSize="text-[13.03px]"
              textPosition="left"
              titleWidth="w-[335px]"
              subtitleWidth="w-[335px] xl:w-[605px]"
              visionText={false}
              titleSize="text-[16.29px] xl:text-[20px]"
              secondTitle={false}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
