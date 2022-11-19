const accounts = [
  {
    id: "1",
    name: "test account",
    balance: 1234.56,
  },
];

export const getAccounts = () => accounts;
export const getAccountsByUser = (userId: string) => accounts[0];
