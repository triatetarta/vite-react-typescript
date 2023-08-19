export enum EOrderType {
  // Eat-in order types
  TABLE = 'table', // An order that is completed later at some point
  EAT_IN = 'eat-in', // An order that is completed immediately

  // Delivery order types
  DELIVERY = 'delivery', // An order that is sent by delivery

  // Takeaway order types
  PICK_UP = 'pick-up', // An order that is taken away
}

export enum EOrderSource {
  IOS = 'IOS',
  ANDROID = 'ANDROID',
  WEB = 'WEB',
  TERMINAL = 'TERMINAL',
  WAITER = 'WAITER',
}
