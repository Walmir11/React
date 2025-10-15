import Button from "./components/button";

function App({nome}) {
  return (
    <div className="App">
      <h1>Olá React! {nome}</h1>
      <Button title="Entrar" />
      <Button title="Sair" />
      <Button title="Abrir" />
      <Button title="Salvar" />
    </div>
  );
}

export default App;
