import Container from "../layout/Container";
import ReviewsCard from "../components/ReviewsCard/ReviewsCard";

const person = [
  { id: 1, name: "Eleanor Pena", img: "/Elenor.png" },
  { id: 2, name: "Cody Fisher", img: "/Cody.png" },
  { id: 3, name: "Kristin Watson", img: "/Cristin.png" },
];

export default function Reviews() {
  return (
    <section className="bg-[#E2BAA4]">
      <Container className="flex flex-col items-center pb-[26px]">
        <h1 className="pt-[26px] pb-[38px] text-center w-[208px] text-[24.15px] xl:text-[30px] xl:w-[258px]">
          Give our users a great experience
        </h1>

        <div className="flex flex-col xl:flex-row gap-3.5">
          {person.map((item) => (
            <ReviewsCard
              key={item.id}
              name={item.name}
              img={item.img}
            />
            
          ))}
        </div>
      </Container>
    </section>
  );
}