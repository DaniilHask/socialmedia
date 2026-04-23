import Container from "../layout/Container";
import { listStatic } from "../data/statistic";

export default function Static() {
  return (
    <section className="bg-[#88C9FD80]">
      <Container className="pt-8 pb-8">
        <div className="flex flex-col xl:flex-row xl:justify-center gap-[70px] xl:gap-[192px]">
          {listStatic.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center leading-none"
            >
              <h1 className="text-[30px] xl:text-[40px]">{item.number}</h1>
              <div className="font-[ClashDisplay] text-[12px] xl:text-[15px] text-[#424242]">
                {item.desription}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
