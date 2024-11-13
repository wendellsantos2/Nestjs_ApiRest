/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CriaUsuarioDto } from './dto/CriaUsuarioDto';

@Injectable()
export class UsuarioRepository {
  private usuarios: CriaUsuarioDto[] = [];

  async salvar(usuario: CriaUsuarioDto): Promise<CriaUsuarioDto> {
    this.usuarios.push(usuario);
    return usuario;  // Retorne o usuário recém-cadastrado
  }

  async listar(): Promise<CriaUsuarioDto[]> {
    return this.usuarios;
  }

  async existeComEmail(email: string): Promise<boolean> {
    const possivelUsuario = this.usuarios.find(
      usuario => usuario.email === email
    );
    return possivelUsuario !== undefined;
  }
}
