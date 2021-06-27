import { Request, Response } from "express";
import { User } from "../entities/User";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";

export class ListUserReceiverComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listUserReceiverComplimentsService =
      new ListUserReceiveComplimentsService();
    const compliments = await listUserReceiverComplimentsService.execute(
      user_id
    );
    return response.json(compliments);
  }
}
