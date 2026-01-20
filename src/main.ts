import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    
    // ATIVA A SEGURANÇA (Remove campos que não estão no DTO)
    whitelist: true, 

    // (Opcional) Retorna ERRO se enviarem campos extras
    // Se você deixar true, o "hacker" recebe um aviso que tentou enviar lixo.
    // Se deixar false, o Nest só ignora o lixo silenciosamente.
    forbidNonWhitelisted: true, 

    // ATIVA A TRANSFORMAÇÃO AUTOMÁTICA
    // Isso faz o Nest converter "10" (string) para 10 (number) automaticamente
    // baseado no tipo que você colocou no DTO ou no Controller.
    transform: true, 
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
