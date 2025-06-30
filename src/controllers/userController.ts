import { Request, Response } from 'express';
import { getProfile, updateProfile, listUsers } from '../services/userService';
import { deleteUserService } from '../services/authService';
import { createUser } from '../services/userService';
import { PrismaClient } from '@prisma/client';

export const create = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    return res.status(201).json(user);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};
export const me = async (req: Request, res: Response) => {
  try {
    const user = await getProfile((req as any).user.id);
    res.json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const user = await updateProfile((req as any).user.id, req.body);
    res.json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const list = async (_: Request, res: Response) => {
  try {
    const users = await listUsers();
    res.json(users);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const user = await deleteUserService(req.params.id);
    res.json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
export const getUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
      const user = await getUserByIdService(userId);
      return res.status(200).json(user);
  } catch (err: any) {
      return res.status(400).json({ error: err.message });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
      const users = await getAllUsersService();
      return res.status(200).json(users);
  } catch (err: any) {
      return res.status(400).json({ error: err.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const { name, email, password } = req.body;
  try {
      const user = await updateUserService(userId, name, email, password);
      return res.status(200).json(user);
  } catch (err: any) {
      return res.status(400).json({ error: err.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
      const user = await deleteUserService(userId);
      return res.status(200).json(user);
  } catch (err: any) {
      return res.status(400).json({ error: err.message });
  }
};


export const getUserByEmail = async (req: Request, res: Response) => {
  const email = req.params.email;
  try {
      const user = await getUserByIdService(email);
      return res.status(200).json(user);
  } catch (err: any) {
      return res.status(400).json({ error: err.message });
  }
};

const prisma = new PrismaClient();

export async function getUserByIdService(identifier: string) {
    const id = identifier;
    return prisma.user.findUnique({
      where: { id: identifier },
    });
}

export async function getAllUsersService() {
  return prisma.user.findMany({});
}

export async function updateUserService(userId: string, name: any, email: any, password: any) {
  const id = userId;
  const data: { name?: string; email?: string; password?: string } = {};
  if (name !== undefined) {
    data.name = name;
  }
  if (email !== undefined) {
    data.email = email;
  }
  if (password !== undefined) {
    data.password = password;
  }
  
  return prisma.user.update({
    where: { id },
    data
  });
}

