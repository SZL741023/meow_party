import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);

  // 取得商品資料
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch('https://ec-course-api.hexschool.io/v2/api/meow_party/product/-OFqvBDToHOf7y7lRZBz');
      const data = await response.json();
      if (data.success) {
        setProduct(data.product);
      }
    };

    fetchProduct();
  }, []);

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
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  // 設定圖片
  const productImage1 = product.imageUrl;
  const productImage2 = product.imagesUrl[0] || productImage1;  // 如果第二張圖片不存在，顯示第一張圖片
  const productImage3 = product.imagesUrl[1] || productImage2;  // 如果第三張圖片不存在，顯示第二張圖片

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img src={productImage1} className="img-fluid mb-3" alt="產品圖片" />
            <div className="row">
              <div className="col-3">
                <img src={productImage1} className="img-fluid" alt="縮圖 1" />
              </div>
              <div className="col-3">
                <img src={productImage2} className="img-fluid" alt="縮圖 2" />
              </div>
              <div className="col-3">
                <img src={productImage3} className="img-fluid" alt="縮圖 3" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-between align-items-center">
              <h2>{product.title}</h2>
            </div>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>NT$ {product.price} - NT$ {product.origin_price}</p>

            <div className="mb-3">
              <label htmlFor="size" className="form-label">規格</label>
              <select className="form-select" id="size">
                <option value="80g">80g 1入</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">購買數量</label>
              <div className="input-group" style={{ width: '150px' }}>
                <button className="btn btn-outline-secondary" type="button" onClick={handleDecrement}>-</button>
                <input type="number" className="form-control text-center" id="quantity" value={quantity} onChange={handleQuantityChange} min="1" style={{ border: 'none' }} />
                <button className="btn btn-outline-secondary" type="button" onClick={handleIncrement}>+</button>
              </div>
            </div>

            <button className="btn btn-warning text-white rounded-pill px-4 py-2">
              <span>加入購物車</span>
            </button>
          </div>

          <ul className="nav nav-tabs mt-4">
            <li className="nav-item">
              <button className="nav-link active" onClick={() => scrollToSection(featuresRef)}>
                產品特色
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection(descriptionRef)}>
                產品說明
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection(reviewsRef)}>
                顧客評價
              </button>
            </li>
          </ul>

          {/* 產品特色 */}
          <div ref={featuresRef} className="mt-4">
            <p className="fw-bold">{product.description}</p>
          </div>

          <div style={{ borderBottom: '1px dashed #ccc', margin: '20px 0' }}></div>

          {/* 產品說明 */}
          <div ref={descriptionRef} className="mt-4">
            <p className="fw-bold">{product.content}</p>
          </div>

          <div style={{ borderBottom: '1px dashed #ccc', margin: '20px 0' }}></div>

          {/* 顧客評價區塊 */}
          <div ref={reviewsRef} className="mt-4">
            <div className="d-flex">
              <div className="align-items-center me-4">
                <div>
                  <span className="fs-1 fw-bold">5.0</span>
                </div>
                <div>
                  <span>★★★★★</span>
                </div>
                <div>
                  <span>4 則評價</span>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-1">
                    <span className="me-2">5</span>
                    <span className="me-2">★</span>
                    <div className="progress" style={{ width: '100px' }}>
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span className="ms-2">100%</span>
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <span className="me-2">4</span>
                    <span className="me-2">★</span>
                    <div className="progress" style={{ width: '100px' }}>
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span className="ms-2">0%</span>
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <span className="me-2">3</span>
                    <span className="me-2">★</span>
                    <div className="progress" style={{ width: '100px' }}>
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span className="ms-2">0%</span>
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <span className="me-2">2</span>
                    <span className="me-2">★</span>
                    <div className="progress" style={{ width: '100px' }}>
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span className="ms-2">0%</span>
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <span className="me-2">1</span>
                    <span className="me-2">★</span>
                    <div className="progress" style={{ width: '100px' }}>
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span className="ms-2">0%</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="btn btn-warning text-white mb-4">撰寫評論</button>
            <div className="mb-4">
              <h5 className="fw-bold">小咪麻麻</h5>
              <div className="d-flex align-items-center mb-2">
                <span>★★★★★</span>
              </div>
              <p>家裡的挑嘴貓咪終於找到愛吃的罐頭了!鮮嫩多汁,光是打開罐頭香味就讓牠迫不及待開動了!</p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold">Tiger爸爸</h5>
              <div className="d-flex align-items-center mb-2">
                <span>★★★★★</span>
              </div>
              <p>我家貓咪體質敏感,很難找到合適的主食罐,但這款雞肉餐罐完全沒問題!毛孩吃得開心,我也安心。</p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold">貓奴小晴</h5>
              <div className="d-flex align-items-center mb-2">
                <span>★★★★★</span>
              </div>
              <p>這款罐頭不僅有新鮮雞肉,還沒有奇怪的添加物,真的是毛孩健康的好選擇,每天吃得津津有味!</p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold">阿呆的主人</h5>
              <div className="d-flex align-items-center mb-2">
                <span>★★★★★</span>
              </div>
              <p>質地軟嫩又多湯汁,我家年紀大的貓咪也吃得很輕鬆,非常推薦這款罐頭!</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default ProductPage;

