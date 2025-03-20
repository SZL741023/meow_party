import { Behavior, Eat, Care, Line, Bubble, Cat } from "./images";
import "./style/_index.scss";
const Article = () => {
  return (
    <div className="container-fluid position-relative bg-neutral-white overflow-hidden">
      <img src={Bubble} className="article-bubble-img" alt="" />
      <div className="container pt-24 pb-25 text-center">
        <div className="article-topic-section mb-15">
          <h3 className="fs-2 mb-3 text-secondary">喵喵文章專欄</h3>
          <img src={Line} alt="" />
        </div>
        <div className="row gap-6">
          <div className="col-12 col-lg-4">
            <div className="card border-0 article-card rounded-4 py-9">
              <div className="card-body">
                <p className="card-text fs-5 text-gray-400 mb-6">
                  貓貓照顧知識
                </p>
                <img src={Care} className="" alt="..." />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="card border-0 article-card rounded-4 py-9">
              <div className="card-body">
                <p className="card-text fs-5 text-gray-400 mb-6">貓咪行為學</p>
                <img src={Behavior} className="" alt="..." />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="card border-0 article-card rounded-4 py-9">
              <div className="card-body">
                <p className="card-text fs-5 text-gray-400 mb-6">飲食營養</p>
                <img src={Eat} className="" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={Cat} className="article-cat-img " alt="" />
    </div>
  );
};
export default Article;
