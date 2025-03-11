import "../styles/component/_banner.scss";
import BannerCat from "/images/cat.png";
import TopDecorate from "./TopDecorate.jsx";
import DownDecorate from "./DownDecorate.jsx";
const Banner = () => {
  return (
    <div className="container-fluid bg-primary-pestel home-banner-section py-12 d-flex position-relative">
      <TopDecorate />
      <DownDecorate />
      <div className="container m-auto">
        <div className="banner-section row align-items-center justify-content-between">
          <div className="col">
            <h1 className="fs-1 text-secondary">
              精選好物
              <br />
              打造喵喵的專屬派對！
            </h1>
            <p className="fs-6 text-gray-400">
              歡迎來到喵喵派對！
              <br />
              這裡是貓咪們的專屬樂園，健康的美味餐點、趣味的玩具、舒適的家居，一切為喵星人準備最好的生活體驗。快來加入這場喵喵派對吧！
            </p>
          </div>
          <div className="col d-flex">
            <img className="m-auto" src={BannerCat} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
