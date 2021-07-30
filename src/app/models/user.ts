import { Byte } from '@angular/compiler/src/util';

export interface User {
  userId: number;
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  passwordHash: Byte[];
  passwordSalt: Byte[];
  status: boolean;
}
