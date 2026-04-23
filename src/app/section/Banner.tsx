import Container from "../layout/Container";
import Title from "../components/Title/Title";
import Button from "../components/Button/Button";

const FLOATING_ELEMENTS = [
  { id: 'star', src: '/star.svg', className: 'left-[5%] top-[5%] w-12 xl:w-[63.75px] xl:h-[68.87px]' },
  { id: 'user1', src: '/Elenor.png', type: 'avatar', className: 'left-[10%] top-[30%] w-10 h-10 xl:w-[59px] xl:h-[59px]' },
  { id: 'fb', src: '/facebook-icon.svg', className: 'left-[6%] top-[45%] w-8 xl:w-[41px] xl:h-[42px]' },
  { id: 'discord', src: '/discord-icon.svg', className: 'left-[15%] top-[55%] w-8 xl:w-[49px] xl:h-[49px]' },
  { id: 'telegram', src: '/telegram-icon.svg', className: 'left-[12%] top-[70%] w-8 xl:w-[35px] xl:h-[35px]' },
  
  { id: 'sparkle', src: '/sparkle.svg', className: 'hidden xl:block right-[15%] top-[17%] w-12 xl:w-[46px] xl:h-[45px]' },
  { id: 'yt', src: '/youtube-icon.svg', className: 'right-[12%] top-[38%] w-[20px] h-[20px] xl:w-[39px] xl:h-[39px]' },
  { id: 'user2', src: '/Woman.png', type: 'avatar', className: 'right-[15%] top-[50%] w-8 h-8 xl:w-[59px] xl:h-[59px]' },
  { id: 'snap', src: '/snapchat-icon.svg', className: 'right-[6%] top-[60%] w-10 xl:w-[53px] h-[53px]' },
  { id: 'twitter', src: '/twitter-icon.svg', className: 'right-[22%] top-[60%] w-[25px] h-[25px] xl:w-[47px] xl:h-[47px]' },
];

export default function Banner() {
  return (
    <section className="bg-[#F1DFD5] w-full relative overflow-hidden min-h-[500px] xl:min-h-[700px] flex items-center">
      <div className="absolute inset-0 pointer-events-none z-0">
        {FLOATING_ELEMENTS.map((el) => (
          <div
            key={el.id}
            className={`absolute transition-transform duration-1000 ease-in-out hover:scale-110 ${el.className}`}
          >
            <img
              src={el.src}
              alt={el.id}
              className={`w-full h-full object-contain ${
                el.type === 'avatar' ? 'rounded-full' : ''
              }`}
            />
          </div>
        ))}
      </div>

      <Container className="relative z-10 pt-[40px] xl:pt-[60px]">
        <Title
          title="The best use of social media marketing"
          subtitle="Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit vehicula in ut id donec urna.Lorem ipsum dolor sit"
          titleWidth="w-full max-w-[330px] xl:max-w-[831px]"
          textSize="text-[12px] xl:text-[16px]"
          subtitleWidth="w-full max-w-[330px] xl:max-w-[577px]"
          titleSize="text-[30px] xl:text-[80px]"
          textPosition="center"
          className="items-center flex flex-col mx-auto"
          visionText={false}
          secondTitle={false}
        />
        
        <div className="flex justify-center gap-4 pt-[63px] xl:pt-10 xl:pt-14 pb-20 relative z-20">
          <Button variant="black">Start 14 days free trial</Button>
          <Button variant="white" className="flex items-center gap-2">
            Watch a demo
          </Button>
        </div>
      </Container>
    </section>
  );
}