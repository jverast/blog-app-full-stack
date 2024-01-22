import { hash, compare } from 'bcrypt';

const encryptPassword = async (password: string) => {
  const saltRounds = 10;
  return await hash(password, saltRounds);
};

const comparePassword = async (password: string, hashedPassword: string) => {
  return await compare(password, hashedPassword);
};

export { encryptPassword, comparePassword };
