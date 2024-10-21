// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service'; // Import UserService
import { User, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {} // Inject UserService

  // Create a new user with password hashing
  async create(createInput: Prisma.UserCreateInput): Promise<User> {
    const hashedPassword = await bcrypt.hash(createInput.password, 10);
    return this.userService.createUser({
      ...createInput,
      password: hashedPassword, // Store the hashed password
    });
  }

  // Validate user credentials for login
  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.getUserByEmail(email); // Use UserService to find user by email
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return user; // Return the valid user
  }

  // Login functionality
  async login(email: string, password: string): Promise<any> {
    const user = await this.validateUser(email, password);
    return { message: 'Login successful', userId: user.id };
  }

  // Logout functionality
  async logout(): Promise<any> {
    return { message: 'Logout successful' };
  }
}
