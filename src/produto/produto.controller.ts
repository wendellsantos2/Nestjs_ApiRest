import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody, ApiParam } from '@nestjs/swagger';
import { ProdutoRepository } from './produto.repository';
import { CriaProdutoDto } from './dto/CriaProdutoDto';

@ApiTags('produtos')
@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoRepository: ProdutoRepository) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo produto' })
  @ApiResponse({ status: 201, description: 'Produto criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @ApiBody({ type: CriaProdutoDto })
  async criaProduto(@Body() dadosDoProduto: CriaProdutoDto) {
    const produtoCadastrado = await this.produtoRepository.salvar(dadosDoProduto);
    return produtoCadastrado;
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os produtos' })
  @ApiResponse({ status: 200, description: 'Lista de produtos.' })
  listaTodos() {
    return this.produtoRepository.listar();
  }

  @Get(':usuarioId')
  @ApiOperation({ summary: 'Lista produtos por ID do usuário' })
  @ApiResponse({ status: 200, description: 'Lista de produtos do usuário especificado.' })
  @ApiParam({ name: 'usuarioId', description: 'ID do usuário para filtrar produtos' })
  listaPorUsuarioId(@Param('usuarioId') usuarioId: number) {
    return this.produtoRepository.listarPorUsuarioId(usuarioId);
  }
}
