import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const usuario = this.usersRepository.findById(user_id);

    if (!usuario || !usuario.admin) {
      throw new Error("Unauthorized User");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
