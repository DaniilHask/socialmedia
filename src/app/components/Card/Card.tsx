import Title from "../Title/Title";
import Image from "next/image";

type Cardprops = {
  img: string;
};

export default function Card({ img }: Cardprops) {
  return (
    <div className="w-[337.82px] xl:w-[415.92px] border-[1.6px] border-[#000000] rounded-[9.58px] p-[25px]">
      <Image
        src={img}
        alt="Photo"
        width={45.52}
        height={50.31}
        className="pb-[17px]"
      />
      <Title
        title={"Digital marketin plan"}
        subtitle="Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit vehicula in ut id donec urna.Lorem ipsum dolor sit amet consectetur. Cras"
        textSize="text-[12.78px]"
        titleWidth="w-[287px]"
        titleSize="text-[15.97px] xl:text-[19.67px]"
        subtitleWidth="xl:w-[305px]"
        textPosition="left"
        className="pb-[16px]"
        visionText={false}
        secondTitle={false}
      />
      <p className="font-[ClashDisplay] flex gap-1 items-center text-[9.58px] pt-6 xl:text-[11.8px]" >
        Discover more
        <Image src="/arrowRight.svg" alt="menu" width={19.17} height={19.17} />
      </p>
    </div>
  );
}
