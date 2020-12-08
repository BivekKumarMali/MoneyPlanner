export interface Expense {
  id: string;
  name: string;
  category: string;
  source: string;
  amount: number;
  month: number;
  date: Date;
  uid: string;
  isregular: boolean;
}
