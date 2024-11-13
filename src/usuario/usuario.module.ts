import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioRepository } from './usuario.repository';
import { EmailEhUnicoValidator } from './vailidacao/email-unico-validator';

@Module({
  controllers: [UsuarioController],
  providers:[UsuarioRepository,EmailEhUnicoValidator]

})
export class UsuarioModule {}