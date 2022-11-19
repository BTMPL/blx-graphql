const users = [
  {
    id: 1,
    name: "The first user",
    friends: [],
  },
  {
    id: 2,
    name: "The second user",
    friends: [],
  },
];

users[0].friends = [users[1]];

export const getUserById = (id: string) => Promise.resolve(users[0]);
export const getAllUsers = () => Promise.resolve(users);
