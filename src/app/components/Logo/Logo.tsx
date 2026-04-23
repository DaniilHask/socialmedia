import Image from "next/image";
export default function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/logo.svg"
        alt="logo"
        width={24}
        height={24}
        className="w-[17px] h-[17px] xl:w-[24px] xl:h-[24px]"
      />
      <p className="font-[ClashDisplay] text-[13px] xl:text-[16px] font-semibold">
        Social media
      </p>
    </div>
  );
}
