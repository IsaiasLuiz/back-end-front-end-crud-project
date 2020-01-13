import React from 'react';
import TopBar from '../../components/topbar';

const NotFound = () => {
    const style = {
        'fontSize': '2em',
        'textAlign': 'center',
        'marginTop': '50px'
    };

    return (
        <div>
            <TopBar />
            <div style={style}>
                {document.title = 'Página não Encontrada'}
                Página Não Encontrada :(
        </div>
        </div>
    );
}

export default NotFound;