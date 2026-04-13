import { useState, useEffect, useMemo, useCallback } from "react";

const Teste = () => {

    // useState é um hook que permite adicionar estado a um componente funcional
    const [name, setName] = useState('Walmir');
    const [age, setAge] = useState(23);

    const handleChangeName = useCallback(() => {
        setName(prev => prev === 'Paulo' ? 'Walmir' : 'Paulo');
    }, []);

    // useCallback memoriza a função, evitando sua recriação em cada renderização
    const handleChangeAge = useCallback(() => {
        const newAge = age * 10;
        console.log('A nova idade é: ', newAge, age);
        setAge(prev => prev === 23 ? 27 : 23);
    }, [age]);

    // useEffect executa uma ação sempre que a variável de dependência é alterada
    useEffect(() => {
      alert('O nome foi alterado para: ' + name);
    }, [name]);

    // useMemo memoriza o valor retornado pela função, evitando recalcular em cada renderização
    const calculo = useMemo(() => {
        console.log('Realizando um cálculo pesado...');
        return 10 * 48735;
    }, []);


    return(
        <div>
            <p>
                nome: {name}
            </p>
            <br />
            <p>
                idade: {age}
            </p> <br />
            <button onClick={handleChangeName}>Mudar nome</button>
            <br />
            <br />
            <button onClick={handleChangeAge}>Mudar idade</button>
        </div>
    )
}

export { Teste };