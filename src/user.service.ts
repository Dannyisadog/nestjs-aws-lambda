import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getMockUser() {
    return {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      createdAt: new Date().toISOString(),
    };
  }
}
