import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCart } from "../screens/ContextReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [cartView, setCartView] = useState(false);
  let data = useCart();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <Link className="navbar-brand fs-1 fst-italic" to="/">
          GoFood
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item">
              <Link className="nav-link active fs-5" to="/">
                Home
              </Link>
            </li>
            {localStorage.getItem("token") ? (
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/MyOrder">
                  My Orders
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
          {!localStorage.getItem("token") ? (
            <div className="d-flex">
              <Link className="btn bg-dark text-white mx-1" to="/Login">
                Login
              </Link>

              <Link className="btn bg-dark text-white mx-1" to="/createuser">
                Signup
              </Link>
            </div>
          ) : (
            <div>
              <div
                className="btn bg-dark text-white mx-2"
                onClick={() => {
                  setCartView(true);
                }}
              >
                My Cart {""}
                <FontAwesomeIcon icon={faCartShopping} />{" "}
                <Badge pill bg="danger">
                  {data.length}
                </Badge>
              </div>
              {cartView ? (
                <Modal
                  onClose={() => {
                    setCartView(false);
                  }}
                >
                  <Cart />
                </Modal>
              ) : null}
              <div
                className="btn bg-dark text-danger mx-2"
                onClick={handleLogout}
              >
                <FontAwesomeIcon icon={faSignOutAlt} />
                Logout
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
