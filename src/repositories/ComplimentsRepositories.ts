import { Repository, EntityRepository } from "typeorm";
import { Compliments } from "../entities/Compliments";

@EntityRepository(Compliments)
export class ComplimentsRepositories extends Repository<Compliments> {}
