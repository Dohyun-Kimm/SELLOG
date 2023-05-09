
export interface IDoneItem {
  type: string;
  message: string;
  problemId: number | null;
  writing_time: Date;
}

export interface IDoneList {
  [key: string]: IDoneItem[] | null;
}

export interface IDoneItemProps {
  doneItem: IDoneItem;
}

export interface ICountDoneItem {
  type: string;
  count: number;
}