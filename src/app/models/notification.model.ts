export interface NotificationPayload {
  body: string;
  title: string;
}

export interface MessagePayload {
  notification: NotificationPayload,
  data: { [key: string]: string }
}