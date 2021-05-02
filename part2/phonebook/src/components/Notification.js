import React from "react";

export const ErrorNotification = ({ notificationMessage }) => {
  if (notificationMessage === null) {
    return null;
  }

  return <div className="error">{notificationMessage}</div>;
};

export const Notification = ({ notificationMessage }) => {
  if (notificationMessage === null) {
    return null;
  }

  return <div className="notification">{notificationMessage}</div>;
};

export default { Notification, ErrorNotification };
