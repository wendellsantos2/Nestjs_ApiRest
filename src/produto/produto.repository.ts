import { Injectable } from '@nestjs/common';
import { CriaProdutoDto } from './dto/CriaProdutoDto';

@Injectable()
export class ProdutoRepository {
  private produtos: CriaProdutoDto[] = [];

  async salvar(produto: CriaProdutoDto) {
    this.produtos.push(produto);
    return produto;
  }

  async listar() {
    return this.produtos;
  }

  async listarPorUsuarioId(usuarioId: number): Promise<CriaProdutoDto[]> {
    return this.produtos.filter(produto => produto.usuarioId === usuarioId);
  }
}
