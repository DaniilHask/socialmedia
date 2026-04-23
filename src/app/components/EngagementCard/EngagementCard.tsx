import React from "react";
import Image from "next/image";

interface IconProps {
  className?: string;
}

const PhoneIcon: React.FC<IconProps> = ({ className }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const SendIcon: React.FC<IconProps> = ({ className }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

interface EngagementBadgeProps {
  icon: React.FC<IconProps>;
  bgColor: string;
  positionClasses: string;
  label?: string;
  subLabel?: string;
}

const EngagementBadge: React.FC<EngagementBadgeProps> = ({ 
  icon: Icon, 
  bgColor, 
  positionClasses, 
  label = "Engage", 
  subLabel = "with your followers" 
}) => (
  <div className={`absolute bg-white rounded-[12px] xl:rounded-[16px] p-2 xl:p-4 flex items-center gap-2 xl:gap-3 shadow-lg z-10 ${positionClasses}`}>
    <div className={`w-8 h-8 xl:w-12 xl:h-12 ${bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
      <Icon className="text-slate-800 w-5 h-5 xl:w-6 xl:h-6" />
    </div>
    <div className="flex flex-col">
      <span className="text-slate-900 font-bold text-[12px] xl:text-base leading-tight">{label}</span>
      <span className="text-slate-600 text-[9px] xl:text-xs font-medium">{subLabel}</span>
    </div>
  </div>
);

const EngagementCard: React.FC = () => {
  return (
    <section className="relative w-[311px] h-[228px] xl:w-[489px] xl:h-[359px] bg-[#E5B9A3] rounded-[24px] overflow-hidden flex items-center justify-center">
      
      <div className="absolute top-0 left-0 pointer-events-none select-none">
        <Image 
          src="/visual.svg" 
          width={256} 
          height={229} 
          alt="" 
          priority
          className="w-[180px] h-auto md:w-[255.94px] md:h-[228.99px]"
        />
      </div>

      <EngagementBadge 
        icon={PhoneIcon}
        bgColor="bg-[#B2F0D1]"
        positionClasses="top-[8%] right-[5%] xl:top-[10%] xl:right-[10%]"
      />

      <EngagementBadge 
        icon={SendIcon}
        bgColor="bg-[#B2D1F0]"
        positionClasses="bottom-[8%] left-[5%] xl:bottom-[10%] xl:left-[10%]"
      />

      <div className="relative w-28 h-28 md:w-48 md:h-48 rounded-full border-4 border-[#D9A38B]/50 overflow-hidden shadow-inner ring-1 ring-black/5">
        <Image
          src="/Elenor.png"
          alt="User Portrait"
          fill
          sizes="(max-width: 768px) 112px, 192px"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default EngagementCard;