import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UserService } from '../user/user.service';
import { User } from '@prisma/client';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly userService: UserService) {
    super();
  }

  // Serialize the user into the session
  serializeUser(user: User, done: Function) {
    done(null, user.id); // Store user ID in the session
  }

  // Deserialize the user from the session (using the stored ID)
  async deserializeUser(id: number, done: Function) {
    try {
      const user = await this.userService.findOne(id); // Ensure `findOne` exists in UserService
      if (user) {
        done(null, user); // Attach the user object to the request
      } else {
        done(null, null); // No user found, return null
      }
    } catch (error) {
      done(error, null); // Error during deserialization
    }
  }
}
