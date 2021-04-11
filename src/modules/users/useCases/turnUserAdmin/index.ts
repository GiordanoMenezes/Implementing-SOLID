import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { TurnUserAdminController } from "./TurnUserAdminController";
import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

const usersRepository = UsersRepository.getInstance();
const turnUserAdminUseCase = new TurnUserAdminUseCase(usersRepository);
// eslint-disable-next-line prettier/prettier
const turnUserAdminController = new TurnUserAdminController(turnUserAdminUseCase);

export { turnUserAdminController };
