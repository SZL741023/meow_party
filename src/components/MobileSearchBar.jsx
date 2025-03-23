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
      <div className="row flex-column my-6 gap-2">
        <div className="col">
          <div className="py-2 border-bottom fw-medium">
            <Link>最新消息</Link>
          </div>
        </div>
        <div className="col">
          <div className="py-2 border-bottom fw-medium">
            <Link>喵喵好物</Link>
          </div>
        </div>
        <div className="col">
          <div className="py-2 border-bottom fw-medium">
            <Link>新手組合</Link>
          </div>
        </div>
        <div className="col">
          <div className="py-2 border-bottom fw-medium">
            <Link>喵喵專欄</Link>
          </div>
        </div>
        <div className="col">
          <div className="py-2 border-bottom fw-medium">
            <Link>常見問題</Link>
          </div>
        </div>
      </div>
      <div className="d-grid gap-4">
        <button
          className="btn btn-primary py-3 text-neutral-white"
          type="button"
        >
          登入/註冊
        </button>
        <button
          className="btn btn-primary py-3 text-neutral-white"
          type="button"
        >
          我的購物車
        </button>
      </div>
    </div>
  );
};

export default MobileSearchBar;
