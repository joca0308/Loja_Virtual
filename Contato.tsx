import { Button } from '../components/Button';

export function Contato() {
  return (
    <div>
      <h2>Contato</h2>
      <form onSubmit={(e) => { e.preventDefault(); alert('Mensagem enviada!'); }}>
        <div>
          <label>Nome: </label><br />
          <input type="text" required />
        </div>
        <br />
        <div>
          <label>E-mail: </label><br />
          <input type="email" required />
        </div>
        <br />
        <div>
          <label>Mensagem: </label><br />
          <textarea required></textarea>
        </div>
        <br />
        <Button texto="Enviar" type="submit" />
      </form>
    </div>
  );
}
