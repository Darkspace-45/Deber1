import React, { useState } from 'react';

export const Acumulador: React.FC = () => {
    const [acumulador, setAcumulador] = useState<number>(0);

    const incrementar = () => {
        setAcumulador(acumulador + 5);
    };

    const disminuir = () => {
        setAcumulador(acumulador - 5);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Acumulador: {acumulador}</h1>
            <button onClick={incrementar} style={{ marginRight: '10px' }}>
                Incrementar
            </button>
            <button onClick={disminuir}>Disminuir</button>
        </div>
    );
};

