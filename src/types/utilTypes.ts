export type MediaList = {
  uuid: string;
  url: string;
};

export type WorkingHour = {
  dayOfWeek: string;
  from: string;
  to: string;
  closed: boolean;
  _id?: string;
};

export type ModifiedWorkingHour = {
  dayOfWeek: string;
  dayName: string;
  hours: { from: string; to: string }[];
  closed: boolean;
  _id?: string;
};
