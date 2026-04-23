import Container from "../../layout/Container";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Image from "next/image";

type FooterSection = {
  title: string;
  items: string[];
};

export const footerLinks: FooterSection[] = [
  {
    title: "Services",
    items: [
      "Incident responder",
      "Secure managed it",
      "Check website url",
      "Locker security",
    ],
  },
  {
    title: "About us",
    items: ["Payment", "Make saving more", "Tax calculator", "Talk to us"],
  },
];

export default function Footer() {
  return (
    <section className="bg-[#ffffff]">
      <Container className="pt-8 flex flex-col items-center xl:pt-[77px] xl:pb-[48px] xl:flex-row xl:justify-around">
        
        <div className="text-left">
          <Logo />

          <p className="text-[15.28px] w-[359px] pt-8 pb-5">
            “Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor.
          </p>

          <div className="relative w-[333px]">
            <input
              placeholder="Enter your email"
              type="email"
              className="w-full border border-black rounded-xl p-[14px] pr-[110px] outline-none"
            />

            <Button
              variant="blue"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-[15.28px] rounded-[12px]"
            >
              Subscribe
            </Button>
          </div>
        </div>

        <div className="mt-10 xl:mt-0 flex flex-col xl:flex-row gap-16">
          
          <div className="grid grid-cols-2 gap-10">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold mb-3">{section.title}</h3>

                <ul className="flex flex-col gap-5">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <p className="font-semibold">Contact info</p>

            <div className="flex flex-col gap-3 pt-[20px]">
              <div className="flex gap-3">
                <Image src="/call.svg" width={24} height={24} alt="call" />
                +88 (246) 658-27-10
              </div>

              <div className="flex gap-3">
                <Image src="/sms.svg" width={24} height={24} alt="sms" />
                Soroushnorozyui@gmail.com
              </div>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
