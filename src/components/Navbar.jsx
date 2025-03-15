import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsDataAsync } from "../slice/productSlice";
import { Link } from "react-router-dom";
import Logo from "/images/logo.svg";
import SearchBar from "./SearchBar";
function Navbar() {
  const dispatch = useDispatch();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openSearchBar = () => {
    setIsSearchOpen(true);
  };
  const closeSearchBar = () => {
    setIsSearchOpen(false);
  };

  useEffect(() => {
    dispatch(getProductsDataAsync());
  }, []);
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg">
        <div className="container py-4">
          <Link className="text-decoration-none me-12" to={"/"}>
            <img src={Logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav column-gap-2">
              <li className="nav-item">
                <Link className="nav-link text-secondary fw-medium" to="/">
                  最新消息
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-secondary fw-medium" to="/">
                  喵喵好物
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-secondary fw-medium" to="/">
                  新手組合
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-secondary fw-medium" to="/">
                  喵喵專欄
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-secondary fw-medium" to="/">
                  常見問題
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-2">
              {isSearchOpen && <SearchBar />}
              {isSearchOpen ? (
                <span
                  className="material-symbols-rounded text-secondary p-2" role="button" 
                  onClick={closeSearchBar}
                >
                  close
                </span>
              ) : (
                <span
                  className="material-symbols-rounded text-secondary p-2" role="button" 
                  onClick={openSearchBar}
                >
                  search
                </span>
              )}
              <span className="material-symbols-rounded text-secondary p-2" role="button">
                login
              </span>
              <Link className="nav-link" to="/Cart">
                <span className="material-symbols-rounded text-secondary fill-icon p-2">
                  shopping_cart
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
