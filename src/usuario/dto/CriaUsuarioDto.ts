import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CriaUsuarioDto {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @ApiProperty({ description: 'Nome do usuário' })
  nome: string;

  @IsEmail({}, { message: 'O e-mail informado é inválido' })
  @ApiProperty({ description: 'Email do usuário' })
  email: string;

  @IsNotEmpty({ message: 'A senha não pode ser vazia' })
  @ApiProperty({ description: 'Senha do usuário' })
  senha: string;
}
