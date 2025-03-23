import { Link } from "react-router-dom";
import "../styles/_styles.scss";
const MobileSearchBar = () => {
  return (
    <div className="container-fluid p-6 bg-primary-pestel vh-100">
      <div className=" d-block d-lg-none position-relative">
        <span className="top-50 ms-4 material-symbols-rounded position-absolute translate-middle-y text-gray-400">
          search
        </span>
        <input
          className="px-13 py-3 border rounded-pill w-100 z-index bg-gray-100"
          type="text"
          placeholder="搜尋產品"
        />
      </div>
      <div className="row flex-column mt-6 gap-2">
        <div className="col py-2">最新消息</div>
        <div className="col py-2">喵喵好物</div>
        <div className="col py-2">新手組合</div>
        <div className="col py-2">喵喵專欄</div>
        <div className="col py-2">常見問題</div>
      </div>
    </div>
  );
};

export default MobileSearchBar;
