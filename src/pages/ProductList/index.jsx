import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { Line } from "../Home/components/article/images";
import { useDispatch } from "react-redux";
import { showAlert } from "../../slice/cartMessageSlice";

const API_BASE = import.meta.env.VITE_API_BASEURL;
const API_PATH = import.meta.env.VITE_API_PATH;

const ProductsList = () => {
  // 新增購物車
  const dispatch = useDispatch();
  const [addProduct, setAddProduct] = useState({
    data: {
      product_id: "",
      qty: 1,
    },
  });
  const addProductToCar = async (product) => {
    const newAddProduct = {
      data: {
        ...addProduct.data,
        product_id: product.id,
      },
    };
    try {
      const response = await axios.post(
        `${API_BASE}/api/${API_PATH}/cart`,
        newAddProduct,
      );
      const { message, data } = response.data;
      dispatch(
        showAlert({
          title: message,
          text: `${data.product.title} 已加入購物車.`,
          icon: "success",
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };
  const location = useLocation();
  const productsData = location.state;
  const navigate = useNavigate();
  const seeProductDetial = (product) => {
    navigate("/product", { state: product });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productsData]);
  return (
    <div className="container-fluid py-24 position-relative">
      <div className="container position-relative">
        <div className="product-topic-section mb-15 text-center">
          <h3 className="cat-canned-food fs-2 mb-3 text-secondary">
            喵喵產品系列
          </h3>
          <img src={Line} alt="" />
        </div>
        <div className="row gap-6 gap-sm-0 align-items-stretch">
          {productsData.map((product) => {
            return (
              <div className="col-sm-4 col-lg-3" key={product.id}>
                <div className="card h-100">
                  <div
                    className="bg-white rounded-circle position-absolute d-flex align-items-center justify-center p-2 top-0 end-0 mt-4 me-4"
                    role="button"
                  >
                    <span className="material-symbols-rounded text-secondary-light">
                      favorite
                    </span>
                  </div>
                  <Link to="/product" state={product}>
                    <img
                      src={product.imageUrl}
                      className="card-img-top object-fit-cover"
                      height={230}
                      onClick={() => seeProductDetial(product)}
                    />
                  </Link>
                  <div className="card-body d-flex flex-column">
                    <h2 className="card-title fs-5 mb-2 text-secondary">
                      {product.title}
                    </h2>
                    <p className="fs-5 text-gray-300 mb-3">
                      NT$ {product.price}
                    </p>
                    <p className="text-secondary mb-3 fs-6">
                      {product.description}
                    </p>
                    <button
                      onClick={() => {
                        addProductToCar(product);
                      }}
                      className="btn btn-outline-secondary w-100 mt-auto"
                    >
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ProductsList;
