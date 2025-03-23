import "./style/_category.scss";
import {
  Food,
  Beaty,
  Clear,
  Health,
  Play,
  Sofa,
  Suit,
  Travel,
} from "./images/";
const Category = () => {
  return (
    <div className="container-fluid home-category d-none d-xl-block py-12 py-lg-20">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card rounded-4 category-card">
              <div className="card-body text-center">
                <img src={Food} className="object-fit-none mb-5" alt="..." />
                <p className="card-text ">零食食品</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-4 category-card">
              <div className="card-body text-center">
                <img src={Play} className="object-fit-none mb-5" alt="..." />
                <p className="card-text">玩具娛樂</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-4 category-card">
              <div className="card-body text-center">
                <img src={Sofa} className="object-fit-none mb-5" alt="..." />
                <p className="card-text">貓咪家俱</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-4 category-card">
              <div className="card-body text-center">
                <img src={Travel} className="object-fit-none mb-5" alt="..." />
                <p className="card-text">外出旅行</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-4 category-card">
              <div className="card-body text-center">
                <img src={Clear} className="object-fit-none mb-5" alt="..." />
                <p className="card-text">清潔用品</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-4 category-card">
              <div className="card-body text-center">
                <img src={Suit} className="object-fit-none mb-5" alt="..." />
                <p className="card-text">貓咪服飾</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-4 category-card">
              <div className="card-body text-center">
                <img src={Beaty} className="object-fit-none mb-5" alt="..." />
                <p className="card-text">美容保養</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-4 category-card">
              <div className="card-body text-center">
                <img src={Health} className="object-fit-none mb-5" alt="..." />
                <p className="card-text">健康醫療</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
