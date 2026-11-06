// @ts-nocheck
import { useCallback, useState } from "react";
import ToastNoatification from "./ToastNoatification";
import "../ToastNotification/ToastNotification.css";

export const useToastNotification = () => {
  const [toastsList, setToastList] = useState([]);
  let timer;

  const removeNotification = (id) => {
    setToastList((toastsList) => {
      console.log(toastsList, id);
      return toastsList.filter((toast) => {
        return toast.id !== id;
      });
    });
  };
  const triggerToastNotification = useCallback(
    ({ id, type, position, message }) => {
      setToastList((toastsList) => [
        ...toastsList,
        {
          id,
          type,
          position,
          message,
        },
      ]);

      setTimeout(() => {
        removeNotification(id);
      }, 3000);
    },

    [],
  );

  const ToastNotificationComponent = () => (
    <div className={`bottom-left toast-list-container`}>
      {Array.isArray(toastsList) &&
        toastsList.map((toast) => {
          return (
            <div>
              <ToastNoatification
                type={toast.type}
                message={toast.message}
                position={toast.position}
                onClose={() => {
                  removeNotification(toast.id);
                }}
              />
            </div>
          );
        })}
    </div>
  );

  return {
    triggerToastNotification,
    ToastNotificationComponent,
    removeNotification,
  };
};
