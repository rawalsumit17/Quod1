import Rectangle11 from "./Rectangle-11.png";
import Rectangle9 from "./Rectangle-9.png";
import Rectangle10 from "./Rectangle-10.png";

let data_product = [
  {
    id: 1,
    details: "Lorem ipsum dolor sit amet",
    image: Rectangle11,
    month: `Fashion/ ${new Date().toLocaleString("default", {
      month: "long",
    })}`,
    year: `${new Date().getFullYear()}`,
  },
  {
    id: 2,
    details: "Lorem ipsum dolor sit amet",
    image: Rectangle9,
    month: `Fashion/ ${new Date().toLocaleString("default", {
      month: "long",
    })}`,
    year: `${new Date().getFullYear()}`,
  },
  {
    id: 3,
    details: "Lorem ipsum dolor sit amet",
    image: Rectangle10,
    month: `Fashion/ ${new Date().toLocaleString("default", {
      month: "long",
    })}`,
    year: `${new Date().getFullYear()}`,
  },
];

export default data_product;
