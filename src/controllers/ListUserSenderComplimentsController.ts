import { Request, Response } from "express";
import { User } from "../entities/User";
import { ListUserSenderComplimentsService } from "../services/ListUserSenderComplimentsService";

export class ListUserSenderComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listUserSenderComplimentsService =
      new ListUserSenderComplimentsService();
    const compliments = await listUserSenderComplimentsService.execute(user_id);
    return response.json(compliments);
  }
}
