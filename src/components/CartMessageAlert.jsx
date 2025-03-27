import { useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useSelector, useDispatch } from "react-redux";

const mySwal = withReactContent(Swal);

const CartMessageAlert = () => {
  const { show, title, text, icon, timer } = useSelector(
    (state) => state.cartMessage,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (show) {
      mySwal.fire({
        title,
        text,
        icon,
        timer,
        confirmButtonColor: "#ffbc46",
      });
    }
  }, [show, title, text, icon, timer, dispatch]);
};

export default CartMessageAlert;
