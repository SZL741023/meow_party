import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsDataAsync } from "../slice/productSlice";
import { Link } from "react-router-dom";
function Navbar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsDataAsync());
  }, []);
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg container">
        <div className="container-fluid">
          <Link className="" to={"/"}>
            <div className="d-flex align-items-center">
              <img src="/logo.svg" alt="logo" />
              <div>
                <p>123</p>
                <p>456</p>
              </div>
            </div>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/test">
                  test
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
