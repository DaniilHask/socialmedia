import React from 'react';

const OrbitingCircles = () => {
  const innerOrbitItems = [
    { id: 'snapchat', src: '/snapchat-icon.svg', angle: 45, size: 'w-[21.64px] h-[21.64px] xl:w-[34px] xl:h-[34px]' },
    { id: 'telegram', src: '/telegram-icon.svg', angle: 190, size: 'w-[17.18px] h-[17.18px] xl:w-[27px] xl:h-[27px]' },
  ];

  const outerOrbitItems = [
    { id: 'user1', type: 'avatar', src: '/Elenor.png', angle: 110, size: 'w-[29.27px] h-[29.27px] xl:w-[46px] xl:h-[46px]' },
    { id: 'twitter', src: '/twitter-icon.svg', angle: 0, size: 'w-[19.09px] h-[19.09px] xl:w-[27px] xl:h-[27px]' },
    { id: 'user2', type: 'avatar', src: '/Woman.png', angle: 280, size: 'w-[29.27px] h-[29.27px] xl:w-[46px] xl:h-[46px]' },
  ];

  return (
    <div className="relative flex items-center justify-center bg-[#90caf9] rounded-[24px] xl:rounded-[32px] overflow-hidden
      w-[311.25px] h-[228.50px] 
      xl:w-[489px] xl:h-[359px]">
      
      <div className="absolute inset-0 m-auto aspect-square h-full">
        
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="28" fill="none" stroke="white" strokeWidth="0.5" opacity="0.4" />
          <circle cx="50" cy="50" r="42" fill="none" stroke="white" strokeWidth="0.5" opacity="0.4" />
        </svg>

        {innerOrbitItems.map((item) => (
          <div
            key={item.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${50 + 28 * Math.cos((item.angle * Math.PI) / 180)}%`,
              top: `${50 + 28 * Math.sin((item.angle * Math.PI) / 180)}%`,
            }}
          >
            <img src={item.src} alt={item.id} className={`${item.size} object-contain`} />
          </div>
        ))}

        {outerOrbitItems.map((item) => (
          <div
            key={item.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${50 + 42 * Math.cos((item.angle * Math.PI) / 180)}%`,
              top: `${50 + 42 * Math.sin((item.angle * Math.PI) / 180)}%`,
            }}
          >
            <img 
              src={item.src} 
              alt={item.id} 
              className={`${item.size} object-contain ${item.type === 'avatar' ? 'rounded-full object-cover' : ''}`} 
            />
          </div>
        ))}
      </div>

      <div className="z-10 flex flex-col items-center justify-center bg-white rounded-full text-center 
        w-[86.38px] h-[86.38px] 
        xl:w-[135px] xl:h-[135px] 
        p-2 xl:p-4">
        <span className="text-[7.95px] xl:text-[12.48px] font-bold text-slate-800 leading-none">+40%</span>
        <span className="text-[7.95px] xl:text-[12.48px] font-medium text-slate-500 leading-tight mt-1">
          increase <br className="hidden xl:block" /> in sales
        </span>
      </div>
    </div>
  );
};

export default OrbitingCircles;