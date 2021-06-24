import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

export class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UserRepositories);

    const userExists = await usersRepositories.findOne({ email });

    if (!userExists) {
      throw new Error("Email/Password incorrect");
    }
    const passwordMatch = await compare(password, userExists.password);

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    const token = sign(
      {
        email: userExists.email,
      },
      "73cbbd5de09e3ebd9f1270885e60cc94",
      {
        subject: userExists.id,
        expiresIn: "1d",
      }
    );
    return token;
  }
}
