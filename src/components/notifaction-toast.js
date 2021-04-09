import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function NotificationToast() {
  const notify = () => {
    toast("Hey dude...", { position: toast.POSITION.TOP_LEFT });
    toast.info("Hey dude Its info...", { position: toast.POSITION.TOP_RIGHT });
    toast.warning("Hey dude its warning...", {
      position: toast.POSITION.TOP_CENTER
    });
    toast.error("Hey dude its error...", {
      position: toast.POSITION.BOTTOM_LEFT
    });
    toast("Hey dude...", { position: toast.POSITION.BOTTOM_CENTER });
  };
  return (
    <div>
      <button onClick={notify}>Toast </button>
    </div>
  );
}

export default NotificationToast;
