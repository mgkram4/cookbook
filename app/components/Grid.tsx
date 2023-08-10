import Card from "./Cards";

const Grid = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
        <Card />
      </div>
    </div>
  );
};

export default Grid;
