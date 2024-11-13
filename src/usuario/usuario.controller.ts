import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import { UsuarioRepository } from './usuario.repository';
import { CriaUsuarioDto } from './dto/CriaUsuarioDto';

@ApiTags('usuarios')
@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo usuário' })
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @ApiBody({ type: CriaUsuarioDto })
  async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDto) {
    const usuarioCadastrado = await this.usuarioRepository.salvar(dadosDoUsuario);
    return usuarioCadastrado;
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os usuários' })
  @ApiResponse({ status: 200, description: 'Lista de usuários.' })
  async listUsuarios() {
    return this.usuarioRepository.listar();
  }
}
  