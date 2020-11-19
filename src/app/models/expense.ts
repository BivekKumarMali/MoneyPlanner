export interface Expense {
  id: string;
  name: string;
  category: string;
  timestamp: Date;
  amount: number;
  isregular: boolean;
}
