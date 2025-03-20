import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Banner,
  Introduction,
  Category,
  Article,
  ProductSection,
} from "./components";

function Home() {
  const navigate = useNavigate();
  const { data, status, error } = useSelector((state) => state.product);
  // const handleSeeMore = (product) => {
  //   navigate("/product", { state: product });
  // };
  return (
    <>
      <Banner />
      <Introduction />
      <Category />
      <ProductSection data={data} />
      <Article />
    </>
  );
}

export default Home;
