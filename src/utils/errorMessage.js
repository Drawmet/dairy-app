import { toast } from "react-toastify";

const errorMessage = value =>
  toast.error(value, {
    position: toast.POSITION.TOP_LEFT,
    autoClose: 5000
  });

export default errorMessage;
