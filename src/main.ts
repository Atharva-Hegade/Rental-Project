// src/main.ts
import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import * as passport from 'passport';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'your-session-secret', // Use a more secure secret in production
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 3600000 }, // 1-hour session duration
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000);
}
bootstrap();
