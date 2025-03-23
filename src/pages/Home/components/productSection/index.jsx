import { useState } from "react";
import { Link } from "react-router-dom";
import { Line, Bubble } from "../article/images";
import { ThreeLines } from "./images";
import axios from "axios";
import "./style/_productionSection.scss";

const API_BASE = import.meta.env.VITE_API_BASEURL;
const API_PATH = import.meta.env.VITE_API_PATH;

const ProductSection = ({ data }) => {
  // 新增購物車
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
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container-fluid py-12 py-lg-24">
      <div className="container position-relative">
        <img src={Bubble} className="product-section-bubble" alt="" />
        <img
          src={ThreeLines}
          className="product-section-threeline z-1"
          alt=""
        />
        <div className="product-topic-section mb-15 text-center">
          <h3 className="cat-canned-food fs-2 mb-3 text-secondary">
            喵喵產品系列
          </h3>
          <img src={Line} alt="" />
        </div>
        <div className="product-more-link d-flex flex-row-reverse mb-4">
          <Link
            className="d-flex align-items-center"
            to="/productslist"
            state={data}
          >
            看更多
            <span className="material-symbols-rounded align-center">
              chevron_right
            </span>
          </Link>
        </div>
        <div className="row row-gap-6 align-items-stretch">
          {data.slice(0, 4).map((product) => {
            return (
              <div
                className="col-12 col-md-6 col-lg-4 col-xl-3"
                key={product.id}
              >
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

export default ProductSection;
