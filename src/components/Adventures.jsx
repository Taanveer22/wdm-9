import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Adventures = () => {
  const adventuresData = useLoaderData();
  console.log(adventuresData);

  return (
    <div>
      <h1>total : {adventuresData.length}</h1>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {adventuresData.map((advItem) => (
          <Card advItem={advItem} key={advItem.Id}></Card>
        ))}
      </div>
    </div>
  );
};

export default Adventures;
