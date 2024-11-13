import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CriaProdutoDto {
  @IsNotEmpty({ message: 'O nome do produto não pode ser vazio' })
  @ApiProperty({ description: 'Nome do produto' })
  nome: string;

  @IsNumber({}, { message: 'O preço deve ser um número' })
  @IsNotEmpty({ message: 'O preço do produto não pode ser vazio' })
  @ApiProperty({ description: 'Preço do produto' })
  preco: number;

  @IsNotEmpty({ message: 'O ID do usuário é obrigatório' })
  @IsNumber({}, { message: 'O ID do usuário deve ser um número' })
  @ApiProperty({ description: 'ID do usuário que está cadastrando o produto' })
  usuarioId: number;
}
