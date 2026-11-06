import React from "react";
import Tabs, { TabsChild } from "./Tabs";
import "./App.css";
import { useToastNotification } from "./components/ToastNotification/useToastNotification";

const App = () => {
  const {
    triggerToastNotification,
    ToastNotificationComponent,
    removeNotification,
  } = useToastNotification();

  return (
    <div>
      {/* <Tabs>
        <TabsChild label={"Tab1"}>
          <div>Tab 1 content </div>
        </TabsChild>
        <TabsChild label={"Tab2"}>
          <div>Tab 2 content </div>
        </TabsChild>
        <TabsChild label={"Tab3"}>
          <div>Tab 3 constent </div>
        </TabsChild>
      </Tabs> */}
      <button
        onClick={() => {
          triggerToastNotification({
            id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
            type: "success",
            message: "Hello world",
            position: "bottom-right",
          });
        }}
      >
        Trigger Notification
      </button>
      <button
        onClick={() => {
          triggerToastNotification({
            id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
            type: "error",
            message: "Hello error",
            position: "bottom-left",
          });
        }}
      >
        Trigger Error Notification
      </button>
      ;
      <ToastNotificationComponent />
    </div>
  );
};

export default App;
