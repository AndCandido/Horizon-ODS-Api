import { User } from "@prisma/client";
import prismaClient from "../database";
import { IUserRepository } from "../interfaces";
import { UserSaveDto } from "../models/user";
import { injectable } from "inversify";

const userDAO = prismaClient.user;

@injectable()
class UserRepository implements IUserRepository {
  async findByUsername(username: string): Promise<User | null> {
    return await userDAO.findUnique({
      where: {
        username,
      },
    });
  }

  async saveUser(user: UserSaveDto): Promise<User | null> {
    return await userDAO.create({
      data: user,
    });
  }
}

export default UserRepository;
