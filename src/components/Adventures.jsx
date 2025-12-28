import Card from "./Card";

const Adventures = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6 animate__animated animate__flash animate__infinite">
        Adventures List
      </h1>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((advItem) => (
          <Card advItem={advItem} key={advItem.id}></Card>
        ))}
      </div>
    </div>
  );
};

export default Adventures;
