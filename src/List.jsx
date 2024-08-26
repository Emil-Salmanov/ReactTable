const List = ({ names }) => {
  return (
    <ul>
      {names.map((ad) => {
        if (ad !== "Əli") return <li>{ad}</li>;
      })}
    </ul>
  );
};

export default List;
