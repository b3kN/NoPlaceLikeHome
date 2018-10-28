export class User {
  id?: string;
  handle?: string;
  name?: {
    first?: string;
    last?: string;
  };
  email?: string;
  password?: string;
  role?: string;
}