import { Card } from '../components/Card';

const listaProdutos = [
  { id: 1, titulo: 'Notebook', imagem: '', descricao: 'Notebook para trabalho', preco: 'R$ 3.500,00' },
  { id: 2, titulo: 'Mouse', imagem: '', descricao: 'Mouse sem fio', preco: 'R$ 80,00' },
  { id: 3, titulo: 'Teclado', imagem: '', descricao: 'Teclado mecânico', preco: 'R$ 250,00' },
  { id: 4, titulo: 'Monitor', imagem: '', descricao: 'Monitor 24 polegadas', preco: 'R$ 900,00' },
  { id: 5, titulo: 'Headset', imagem: '', descricao: 'Fone com microfone', preco: 'R$ 150,00' },
  { id: 6, titulo: 'Webcam', imagem: '', descricao: 'Câmera Full HD', preco: 'R$ 200,00' }
];

export function Produtos() {
  return (
    <div>
      <h2>Produtos</h2>
      <div className="lista-cards">
        {listaProdutos.map((item) => (
          <Card
            key={item.id}
            titulo={item.titulo}
            imagem={item.imagem}
            descricao={item.descricao}
            preco={item.preco}
          />
        ))}
      </div>
    </div>
  );
}
