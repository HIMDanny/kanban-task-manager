import { NestFactory } from '@nestjs/core';

// eslint-disable-next-line import/extensions
import { AppModule } from './app.module';

// eslint-disable-next-line function-name/starts-with-verb
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
