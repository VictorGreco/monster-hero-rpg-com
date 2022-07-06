import { Injectable } from '@nestjs/common';
import { AccountCreateDTO } from './dtos/account-create-dto';
import { AccountResponseDTO } from './dtos/account-response-dto';

@Injectable()
export class AccountService {
  create({ username, email, password }): AccountResponseDTO {
    const creationTimestamp = new Date();
    const account: AccountCreateDTO = {
      username,
      email,
      password,
      creationTimestamp,
      lastLogin: creationTimestamp,
      gold: 2000,
      gems: 10,
      itemsStorage: [],
      bio: `Hi I'm ${username} and I'm new at monster-hero-rpg :)`,
      legendaryHero: null,
      companions: [],
      guild: '',
    };

    // save new account into mongo collection before removing the password

    const accountResponse = {
      id: '',
      ...account,
    };

    const { password: psw, email: mail, ...response } = accountResponse;

    return response;
  }
}
