import Intro from "/images/introduction.png";
import Dollars from "/images/dollars.png";
import Gift from "/images/gift.png";
import Cart from "/images/car.png";
import "../styles/component/_introduction.scss";

const Introduction = () => {
  return (
    <div className="container-fluid bg-neutral-white py-24 d-flex position-relative">
      <div className="container m-auto">
        <div className="row align-items-center justify-content-between">
          <div className="col-4 intro-img position-relative">
            <img src={Intro} alt="" className="" />
          </div>
          <div className="col-7 p-9 intro-word position-relative">
            <h3 className="text-secondary mb-6">
              來喵喵派對，為你的毛孩子挑選牠最愛的派對必備品，讓牠的生活每天都像過節一樣快樂吧！
            </h3>
            <p className="text-gray-400 fs-6">
              每隻喵喵都有自己的小癖好與需求，無論是挑嘴的美食家、充滿活力的小獵人，還是優雅迷人的沙發小公主，喵喵派對都能滿足牠們的願望！
            </p>
            <p className="text-gray-400 fs-6">
              我們精心挑選每一樣商品，從營養豐富的食品與零食，到趣味十足的玩具，再到舒適實用的家具、美容用品和清潔神器，讓你的貓咪在生活的每個細節裡都感受到滿滿的愛與呵護。
            </p>
            <div className="intro-discount d-flex gap-6 mt-6">
              <div className="rounded-4 p-4 shadow m-1">
                <img src={Dollars} className="d-block mx-auto" alt="..." />
                <div className="card-body text-center fs-6">
                  <h4 className="text-secondary fs-6">滿$499</h4>
                  <p className="card-text text-gray-400">常溫品免運</p>
                </div>
              </div>
              <div className="rounded-4 p-4 shadow m-1">
                <img src={Gift} className="d-block mx-auto" alt="..." />
                <div className="card-body text-center fs-6">
                  <h4 className="text-secondary fs-6">滿額禮</h4>
                  <p className="card-text text-gray-400">登入會員即享</p>
                </div>
              </div>
              <div className="rounded-4 p-4 shadow m-1">
                <img src={Cart} className="d-block mx-auto" alt="..." />
                <div className="card-body text-center fs-6">
                  <h4 className="text-secondary fs-6">當日出貨</h4>
                  <p className="card-text text-gray-400">平日10:00前下單</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
