
import { message, notification } from 'antd';


export const showMessage = (type, content, duration = 3) => {
  message[type](content, duration); 
};


export const showNotification = ({
  type = 'info',
  title = 'Notification Title',
  description = 'Notification Description',
  duration = 3,
  placement = 'topRight', 
}) => {
  notification[type]({
    message: title,
    description,
    placement,
    duration,
  });
};