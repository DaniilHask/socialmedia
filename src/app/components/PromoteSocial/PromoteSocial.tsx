import Image from "next/image";
import Button from "../Button/Button";
const PromoteSocial = () => {
  return (
    <div className="pb-[28px]">
      <div className="relative w-[344.62px] bg-[#90caf9] rounded-[8.46px] p-8 overflow-hidden flex flex-col items-center xl:w-[489px] xl:h-[359px]">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <svg
            viewBox="0 0 200 200"
            className="text-white opacity-60 w-40 h-40"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              d="M0,40 C50,40 50,10 100,10 C150,10 150,40 200,40"
              transform="rotate(-15 100 100)"
            />
          </svg>
        </div>

        <div className="relative z-10 w-full aspect-video rounded-2xl overflow-hidden shadow-xl mb-6">
          <Image
            src="/Video.png"
            alt="Social media team"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white/90 p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
              <Image src="/play.svg" width={32} height={32} alt="play"/>
            </button>
          </div>
        </div>

        <Button variant="white">Watch a demo</Button>
      </div>
    </div>
  );
};

export default PromoteSocial;
