import { listLink } from "../../data/list";
import Button from "../Button/Button";

type style = {
  className?: string;
};

export default function HeaderNav({ className }: style) {
  return (
    <div className="flex items-center">
      <nav className={className}>
        <ul className="flex flex-col lg:flex-row gap-4 p-4 lg:p-0">
          {listLink.map((item) => (
            <li key={item.id}>
              <a href={item.href} className="block py-2">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
