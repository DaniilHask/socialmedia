import Image from "next/image";

type button = {
  children: React.ReactNode;
  className?: string;
  variant: "black" | "white" | "blue" | "invise"
};

const style = {
  black: "bg-[#262626] text-[#FEFEFE]",
  white: "bg-[#FFFFFF] text-[#202020] border border-[#000000]",
  blue: "bg-[#88C9FD] text-[#292929]",
  invise: "bg-none text-[#000000]"
}

export default function Button({ children, variant, className = "" }: button) {
  return (
    <button
      className={`${style[variant]} ${className} text-[9.28px] xl:text-[16px] p-[11.33px] flex items-center gap-2`}
    >
      {variant !== "black" &&  variant !== "blue" && variant !== "invise" && (
        <Image src="/play.svg" alt="play" width={12} height={12} />
      )}
      {children}
    </button>
  );
}
