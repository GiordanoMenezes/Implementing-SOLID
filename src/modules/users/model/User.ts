import { v4 as uuidV4 } from "uuid";

class User {
  constructor(name: string, email: string) {
    this.id = uuidV4();
    this.created_at = new Date();
    this.updated_at = new Date();
    this.email = email;
    this.name = name;
  }

  id: string;

  name: string;

  admin = false;

  email: string;

  created_at: Date;

  updated_at: Date;
}

export { User };
