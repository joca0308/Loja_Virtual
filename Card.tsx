import { Button } from './Button';

interface CardProps {
  titulo: string;
  imagem: string;
  descricao: string;
  preco: string;
}

export function Card({ titulo, imagem, descricao, preco }: CardProps) {
  return (
    <div className="card">
      <img src={imagem} alt={titulo} width="100" height="50" />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <p><strong>{preco}</strong></p>
      <Button texto="Ver mais" onClick={() => alert(`Produto: ${titulo}`)} />
    </div>
  );
}
