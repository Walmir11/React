import React, {useState, useEffect} from 'react';

const App = () => {

    const [usuario, setUsuario] = useState([""]);
    const [counter, setCounter] = useState(0);
    const [usuarios, setUsuarios] = useState(["Paulo", "Maria", "João"]);

    const handleAdicionarUsuario = () => {
        setUsuarios([...usuarios, usuario]);
        setUsuario("");
    }

    useEffect(() => {
        setCounter(usuarios.length);
    }, [usuarios]);


    return (
        <div className="App">
            <h1>Hello Dio!</h1>
            <h3>Total: {counter}</h3>
            <div>
                <input 
                    type="text" 
                    value={usuario} 
                    onChange={(event) => setUsuario(event.target.value)} 
                />
                <button onClick={handleAdicionarUsuario}>Adicionar</button>
            </div>
            <hr />
            {usuarios.map((item) => {
                return (
                    <p key={item}>
                        {item}
                    </p>
                )
            })}
        </div>
    )
}

export default App
