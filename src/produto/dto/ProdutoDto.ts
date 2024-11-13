import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ProdutoDto {
  @IsNotEmpty()
  @ApiProperty({ description: 'Nome do produto' })
  nome: string;
  @IsNotEmpty()
  @ApiProperty({ description: 'Descrição do produto' })
  descricao: string;

  @ApiProperty({ description: 'Preço do produto', example: 99.99 })
  preco: number;
}
