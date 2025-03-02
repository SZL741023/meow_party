import { useSelector } from "react-redux";

function Test() {
  const { data, status, error } = useSelector((state) => state.product);
  return (
    <>
      <ol>
        {data.map((d) => (
          <li key={d.id}>{d.title}</li>
        ))}
      </ol>
    </>
  );
}

export default Test;
