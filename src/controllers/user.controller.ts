import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import userService from '../services/user.service';

const getUser = async ({ params: { id } }: Request, res: Response) => {
  try {
    const user = await userService.get(id);

    if (!user) {
      return res.status(404).send({ error: 'USER_NOT_FOUND' });
    }

    return res.send(user);
  } catch (e) {
    handleHttp(res, 'GET_USER_ERROR');
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAll();
    return res.send(users);
  } catch (e) {
    handleHttp(res, 'GET_USERS_ERROR');
  }
};

const deleteUser = async ({ params: { id } }: Request, res: Response) => {
  try {
    await userService.remove(id);
    res.status(204).send();
  } catch (e) {
    handleHttp(res, 'DELETE_USER_ERROR', e);
  }
};

export { getUser, getUsers, deleteUser };
