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
      {/* {status === "loading" && <p>Loading</p>} */}
      {/* {status === "successed" && ( */}
      {/*   <table className="table align-middle"> */}
      {/*     <thead> */}
      {/*       <tr> */}
      {/*         <th>圖片</th> */}
      {/*         <th>商品名稱</th> */}
      {/*         <th>價格</th> */}
      {/*         <th></th> */}
      {/*       </tr> */}
      {/*     </thead> */}
      {/*     <tbody> */}
      {/*       {data.map((product) => ( */}
      {/*         <tr key={product.id}> */}
      {/*           <td style={{ width: "200px" }}> */}
      {/*             <img */}
      {/*               className="img-fluid" */}
      {/*               src={product.imageUrl} */}
      {/*               alt={product.title} */}
      {/*             /> */}
      {/*           </td> */}
      {/*           <td>{product.title}</td> */}
      {/*           <td> */}
      {/*             <del className="h6">原價 {product.origin_price}</del> */}
      {/*             <div className="h5">特價 {product.price}</div> */}
      {/*           </td> */}
      {/*           <td> */}
      {/*             <div className="btn-group btn-group-sm"> */}
      {/*               <button */}
      {/*                 type="button" */}
      {/*                 className="btn btn-outline-secondary" */}
      {/*                 onClick={() => handleSeeMore(product)} */}
      {/*               > */}
      {/*                 <i className="fas fa-spinner fa-pulse"></i> */}
      {/*                 查看更多 */}
      {/*               </button> */}
      {/*               <button type="button" className="btn btn-outline-danger"> */}
      {/*                 <i className="fas fa-spinner fa-pulse"></i> */}
      {/*                 加到購物車 */}
      {/*               </button> */}
      {/*             </div> */}
      {/*           </td> */}
      {/*         </tr> */}
      {/*       ))} */}
      {/*     </tbody> */}
      {/*   </table> */}
      {/* )} */}
    </>
  );
}

export default Home;
