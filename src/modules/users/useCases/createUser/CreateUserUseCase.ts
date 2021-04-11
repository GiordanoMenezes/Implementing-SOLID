import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const findEmail = this.usersRepository.findByEmail(email);

    if (findEmail) {
      throw new Error("User email already exists!");
    }
    return this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
