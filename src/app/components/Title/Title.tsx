type style = {
  className?: string;
  title: string;
  subtitle: string;

  titleWidth?: string;
  subtitleWidth?: string;

  titleSize: string;
  textSize: string;

  textPosition: "center" | "left";
  visionText?: boolean;
  subtitleMore?: string;
  secondTitle?: boolean;
};

const positionText = {
  center: "text-center items-center",
  left: "text-left items-start",
};

export default function Title({
  className,
  title,
  subtitle,
  titleWidth,
  subtitleWidth,
  textSize,
  titleSize,
  textPosition,
  visionText,
  subtitleMore,
  secondTitle,
}: style) {
  return (
    <div className={`${className} gap-3.5 ${positionText[textPosition]}`}>
      
      <h1 className={`${titleSize} ${titleWidth}`}>
        {title}
      </h1>

      {secondTitle && (
        <h2 className="text-[14px] font-bold font-[ClashDisplay] xl:text-[20px]">
          Build a community
        </h2>
      )}

      <p className={`${textSize} font-medium ${subtitleWidth}`}>
        {subtitle}
      </p>

      {secondTitle && (
        <h2 className="text-[14.34px] font-bold font-[ClashDisplay] xl:text-[20px]">
          Video & live streaming
        </h2>
      )}

      {visionText && (
        <p className={`${textSize} font-medium ${subtitleWidth}`}>
          {subtitleMore}
        </p>
      )}
    </div>
  );
}