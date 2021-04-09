import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const CustomNotification = ({ closeToast }) => {
  return (
    <div>
      <span>Something went wrong..Contact IT</span>
      <button onClick={closeToast}>Close</button>
    </div>
  );
};

function NotificationToast() {
  const notify = () => {
    toast("Hey dude...", { position: toast.POSITION.TOP_LEFT });
    toast.info("Hey dude Its info...", { position: toast.POSITION.TOP_RIGHT });
    toast.warning(<CustomNotification />, {
      position: toast.POSITION.TOP_CENTER
    });
    toast.error("Hey dude its error...", {
      position: toast.POSITION.BOTTOM_LEFT
    });
    toast.error(<CustomNotification />, {
      position: toast.POSITION.BOTTOM_CENTER
    });
    toast.success("Hey dude...", { position: toast.POSITION.BOTTOM_RIGHT });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={notify}>Toast </button>
    </div>
  );
}

export default NotificationToast;
