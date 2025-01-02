// src/components/Error.tsx
import React from 'react';

interface ErrorProps {
    statusCode?: number;
    message?: string;
}

const Error: React.FC<ErrorProps> = ({
    statusCode = 404,
    message = "Page non trouvée"
}) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-4">Erreur {statusCode}</h1>
            <p className="text-xl mb-8">{message}</p>
            <a
                href="/"
                className="px-4 py-2 border-solid border-primary border-[2px] bg-primary text-white rounded hover:bg-white hover:text-primary"
            >
                Retour à l'accueil
            </a>
        </div>
    );
};

export default Error;