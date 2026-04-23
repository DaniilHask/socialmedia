type ReviewsCardProps = {
  name: string;
  img: string;
};

export default function ReviewsCard({ name, img }: ReviewsCardProps) {
  return (
    <div className="bg-[#FFFFFF] p-[22px] rounded-[9.35px] ">
      <div className="text-[12.46px] w-[292px] xl:text-[15.28px] xl:w-[359px]">
        “Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque
        tortor. Sed massa sit vehicula in ut id donec urna.Lorem ipsum dolor sit
        amet consectetur. Cras feugiat massa pellentesque tortor. “
      </div>

      <div className="flex items-center gap-3 mt-4">
        <img src={img} alt={name} className="w-8 h-8 xl:w-[45px] xl:h-[45px] rounded-full" />
        <div className="flex flex-col">
          <span className="text-[12px] xl:text-[15.28px] font-bold">{name}</span>
          <span className="text-[12.46px] xl:text-[15.28px]">Ceo</span>
        </div>
      </div>
    </div>
  );
}
