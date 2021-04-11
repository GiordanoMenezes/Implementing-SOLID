/* eslint-disable prettier/prettier */
import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { email, name } = request.body;
      return response.status(201).json(this.createUserUseCase.execute({ email, name }));
    } catch (e) {
      return response.status(400).json({ error: e.message });
    }
  }
}

export { CreateUserController };
