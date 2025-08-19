import { v4 as uuidv4 } from 'uuid';

export type User = {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
};

const users: User[] = [];

export const usersStore = {
  findByEmail(email: string): User | undefined {
    return users.find(u => u.email.toLowerCase() === email.toLowerCase());
  },
  create({ email, name, passwordHash }: { email: string; name: string; passwordHash: string }): User {
    const user: User = { id: uuidv4(), email, name, passwordHash };
    users.push(user);
    return user;
  }
};

