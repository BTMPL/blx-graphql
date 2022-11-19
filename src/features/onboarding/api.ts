const users = [
  {
    id: "1",
    name: "The first user",
  },
  {
    id: "2",
    name: "The second user",
  },
];

export const getUserById = (id: string) => Promise.resolve(users[0]);
export const getAllUsers = () => Promise.resolve(users);
