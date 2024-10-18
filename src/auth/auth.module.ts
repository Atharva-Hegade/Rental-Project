import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './strategy/local.strategy';

@Module({
  imports: [PassportModule , UserModule, AuthModule] ,
  controllers: [],
  providers: [LocalStrategy],
})
export class AuthModule {}
