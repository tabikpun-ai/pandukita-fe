import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./App.jsx";
import "./index.css";
import "leaflet/dist/leaflet.css";
import { RouterProvider } from "react-router-dom";
import "./disk/css/main.css";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import { GlobalProvider } from "./store/index.jsx";
import Toast from "./component/popUp/Toast.jsx";
import Notification from "./component/popUp/Notification.jsx";
import { PlanProvaider } from "./store/plan/index.jsx";
import { registerSW } from "virtual:pwa-register";
if ("serviceWorker" in navigator) {
  const updateSW = registerSW({
    onNeedRefresh() {
      const isUpdate = window.confirm(
        "New Update Available. Click OK to update"
      );
      if (isUpdate) {
        updateSW(true);
      }
    },
    onOfflineReady() {
      console.log("offline ready");
    },
  });
}

import L from "leaflet";
import ModalConfirm from "./component/Modal/comfirm.jsx";
import ModalWaitOrder from "./component/Modal/WaitOrder.jsx";
L.Icon.Default.imagePath = "/leaflet_images/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <ModalWaitOrder />
      <ModalConfirm />
      <Toast />
      <Notification />
      <PlanProvaider>
        <RouterProvider router={router}>/</RouterProvider>
      </PlanProvaider>
    </GlobalProvider>
  </React.StrictMode>
);
