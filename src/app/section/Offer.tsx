import Container from "../layout/Container";
import Title from "../components/Title/Title";
import Card from "../components/Card/Card";

const imageOffer = [
  { id: 1, img: "/offer1.svg" },
  { id: 2, img: "/offer2.svg" },
  { id: 3, img: "/offer3.svg" },
];

export default function Offer() {
  return (
    <section>
      <Container className="xl:px-[75px]">
        <Title
          title="Take the lead in smartly social media marketing"
          subtitle="Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit vehicula in ut id donec urna.Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit vehicula in ut id donec urna."
          titleWidth="w-[298px] xl:w-[463px]"
          subtitleWidth="w-[298px] xl:w-[570px]"
          textSize="text-[9.51px] xl:text-[16px]"
          titleSize="text-[23.78px] xl:text-[40px]"
          textPosition="center"
          className="pt-[18px] pb-6 flex flex-col items-center xl:flex-row xl:text-left xl:justify-between xl:pt-[51px]"
          visionText={false}
          secondTitle={false}
        />
        <div className="flex flex-col xl:flex-row items-center justify-center xl:flex xl:justify-around gap-[18.37px]">
          {imageOffer.map((item) => (
            <Card key={item.id} img={item.img} />
          ))}{" "}
        </div>
      </Container>
    </section>
  );
}
