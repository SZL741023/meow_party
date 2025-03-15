import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/_product.scss";

const API_BASE = import.meta.env.VITE_API_BASEURL;
const API_PATH = import.meta.env.VITE_API_PATH;

function ProductPage() {
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
  const location = useLocation();
  const productData = location.state || {};
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const featuresRef = useRef(null);
  const descriptionRef = useRef(null);
  const reviewsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  if (!productData) {
    return <p>Loading...</p>;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productData]);
  return (
    <>
      <div className="container pt-21 pb-24">
        <div className="row">
          <div className="col-md-6">
            <div className="row mb-6">
              <div className="col">
                <img
                  src={productData.imageUrl}
                  className="img-display object-fit-cover rounded "
                  alt={productData.title}
                />
              </div>
            </div>
            <div className="row">
              {productData.imagesUrl.map((url, index) => (
                <div className="col-4" key={index}>
                  <img
                    src={url}
                    className="img-display object-fit-cover mb-3 rounded"
                    alt={productData.title}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-5">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="fs-2 text-secondary fw-bold">
                {productData.title}
              </h2>
              <span
                className="material-symbols-rounded text-secondary-light"
                role="button"
              >
                favorite
              </span>
            </div>
            <p className="fs-3 text-gray-300 fw-bold mb-6">
              NT$ {productData.price} - NT$ {productData.origin_price}
            </p>

            <div className="mb-6">
              <label htmlFor="size" className="form-label text-gray-400">
                規格
              </label>
              <select className="form-select" id="size">
                <option value="80g">80g 1入</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="quantity" className="form-label text-gray-400">
                購買數量
              </label>
              <div className="cart-qty-group d-flex flex-nowrap flex-shrink-0 flex-grow-1">
                <button
                  className="btn bg-gray-100 rounded-0 rounded-start-circle d-flex align-items-center"
                  type="button"
                  onClick={handleDecrement}
                >
                  <span className="material-symbols-rounded">remove</span>
                </button>

                <input
                  type="text"
                  className="form-control text-center bg-gray-100 border-0 rounded-0"
                  placeholder="1"
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  readOnly
                />

                <button
                  className="btn bg-gray-100 rounded-0 rounded-end-circle d-flex align-items-center"
                  type="button"
                >
                  <span
                    className="material-symbols-rounded"
                    onClick={handleIncrement}
                  >
                    add
                  </span>
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                addProductToCar(productData);
              }}
              type="button"
              className="btn btn-primary w-100 text-white"
            >
              加入購物車
            </button>
          </div>

          <hr className="border-bottom border-gray-200 my-24 border-dashed" />

          <ul className="nav nav-tabs mt-4">
            <li className="nav-item">
              <button
                className="nav-link active"
                onClick={() => scrollToSection(featuresRef)}
              >
                產品特色
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => scrollToSection(descriptionRef)}
              >
                產品說明
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => scrollToSection(reviewsRef)}
              >
                顧客評價
              </button>
            </li>
          </ul>

          {/* 產品特色 */}
          <div ref={featuresRef} className="mt-4">
            <p className="fw-bold text-secondary">{productData.description}</p>
          </div>

          <hr className="border-bottom border-gray-200 my-6 border-dashed" />

          {/* 產品說明 */}
          <div ref={descriptionRef} className="mt-4">
            <p className="fw-bold text-secondary">{productData.content}</p>
          </div>

          <hr className="border-bottom border-gray-200 my-6 border-dashed" />

          {/* 顧客評價區塊 */}
          <div ref={reviewsRef} className="mt-4">
            <div className="d-flex align-items-center justify-content-start gap-8 mb-4">
              <div>
                <p className="fs-1 fw-bold text-secondary">5.0</p>
                <div className="text-primary-light">
                  <span className="material-symbols-rounded fill-icon">
                    star
                  </span>
                  <span className="material-symbols-rounded fill-icon">
                    star
                  </span>
                  <span className="material-symbols-rounded fill-icon">
                    star
                  </span>
                  <span className="material-symbols-rounded fill-icon">
                    star
                  </span>
                  <span className="material-symbols-rounded fill-icon">
                    star
                  </span>
                </div>
                <p className="text-gray-400">4 則評價</p>
              </div>

              <div className="d-flex flex-column">
                <div className="d-flex align-items-center mb-1">
                  <p className="me-1 text-gray-400">5</p>
                  <span className="material-symbols-rounded fill-icon text-primary-light me-4">
                    star
                  </span>
                  <div
                    className="progress me-4"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <p className="ms-2 text-gray-300">100%</p>
                </div>
                <div className="d-flex align-items-center mb-1">
                  <p className="me-1 text-gray-400">4</p>
                  <span className="material-symbols-rounded fill-icon text-primary-light me-4">
                    star
                  </span>
                  <div
                    className="progress me-4"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar" style={{ width: "0%" }}></div>
                  </div>
                  <p className="ms-2 text-gray-300">0%</p>
                </div>
                <div className="d-flex align-items-center mb-1">
                  <p className="me-1 text-gray-400">3</p>
                  <span className="material-symbols-rounded fill-icon text-primary-light me-4">
                    star
                  </span>
                  <div
                    className="progress me-4"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar" style={{ width: "0%" }}></div>
                  </div>
                  <p className="ms-2 text-gray-300">0%</p>
                </div>
                <div className="d-flex align-items-center mb-1">
                  <p className="me-1 text-gray-400">2</p>
                  <span className="material-symbols-rounded fill-icon text-primary-light me-4">
                    star
                  </span>
                  <div
                    className="progress me-4"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar" style={{ width: "0%" }}></div>
                  </div>
                  <p className="ms-2 text-gray-300">0%</p>
                </div>
                <div className="d-flex align-items-center mb-1">
                  <p className="me-1 text-gray-400">1</p>
                  <span className="material-symbols-rounded fill-icon text-primary-light me-4">
                    star
                  </span>
                  <div
                    className="progress me-4"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar" style={{ width: "0%" }}></div>
                  </div>
                  <p className="ms-2 text-gray-300">0%</p>
                </div>
              </div>
            </div>

            <button className="btn btn-warning text-white mb-8">
              撰寫評論
            </button>
            <div className="d-flex flex-column gap-4">
              <div className="mb-4 text-secondary">
                <p className="fw-bold">小咪麻麻</p>
                <div className="text-primary-light">
                  <span className="material-symbols-rounded fill-icon">
                    star
                  </span>
                  <span className="material-symbols-rounded fill-icon">
                    star
                  </span>
                  <span className="material-symbols-rounded fill-icon">
                    star
                  </span>
                  <span className="material-symbols-rounded fill-icon">
                    star
                  </span>
                  <span className="material-symbols-rounded fill-icon">
                    star
                  </span>
                </div>
                <p className="text-gray-400">
                  家裡的挑嘴貓咪終於找到愛吃的罐頭了！鮮嫩多汁，光是打開罐頭香味就讓牠迫不及待開動了！
                </p>
              </div>
              <div className="mb-4 text-secondary">
                <p className="fw-bold">Tiger爸爸</p>
                <div className="text-primary-light">
                  <span className="material-symbols-rounded fill-icon">
                    star
                  </span>
                  <span className="material-symbols-rounded fill-icon">
                    star
                  </span>
                  <span className="material-symbols-rounded fill-icon">
                    star
                  </span>
                  <span className="material-symbols-rounded fill-icon">
                    star
                  </span>
                  <span className="material-symbols-rounded fill-icon">
                    star
                  </span>
                </div>
                <p className="text-gray-400">
                  我家貓咪體質敏感，很難找到合適的主食罐，但這款雞肉餐罐完全沒問題！毛孩吃得開心，我也安心。
                </p>
              </div>
              <div className="mb-4 text-secondary">
                <p className="fw-bold">貓奴小晴</p>
                <div className="text-primary-light">
                  <span className="material-symbols-rounded fill-icon">
                    star
                  </span>
                  <span className="material-symbols-rounded fill-icon">
                    star
                  </span>
                  <span className="material-symbols-rounded fill-icon">
                    star
                  </span>
                  <span className="material-symbols-rounded fill-icon">
                    star
                  </span>
                  <span className="material-symbols-rounded fill-icon">
                    star
                  </span>
                </div>
                <p className="text-gray-400">
                  這款罐頭不僅有新鮮雞肉，還沒有奇怪的添加物，真的是毛孩健康的好選擇，每天吃得津津有味！
                </p>
              </div>
              <div className="mb-4 text-secondary">
                <p className="fw-bold">阿呆的主人</p>
                <div className="text-primary-light">
                  <span className="material-symbols-rounded fill-icon">
                    star
                  </span>
                  <span className="material-symbols-rounded fill-icon">
                    star
                  </span>
                  <span className="material-symbols-rounded fill-icon">
                    star
                  </span>
                  <span className="material-symbols-rounded fill-icon">
                    star
                  </span>
                  <span className="material-symbols-rounded fill-icon">
                    star
                  </span>
                </div>
                <p className="text-gray-400">
                  質地軟嫩又多湯汁，我家年紀大的貓咪也吃得很輕鬆，非常推薦這款罐頭！
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
