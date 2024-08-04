import Button from "./Button";
const lists = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Cricket",
  "Valintines",
];

const ButtonList = () => {
  return (
    <div>
      {lists.map((list, index) => (
        <Button key={index} name={list} />
      ))}
    </div>
  );
};

export default ButtonList;
