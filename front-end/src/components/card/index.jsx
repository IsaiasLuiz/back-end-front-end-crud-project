import React from 'react';
import moment from 'moment'
import './index.css';


const Card = props => {
	const participants = props.data.amount != 0 ? props.data.amount : 'Sem quantidade Definida'
	return (
		<div className="card">
			<h4>
				{props.data.description}
				<p>
					{`${moment(props.data.startDate, 'YYYY/MM/DD').format('DD/MM/YYYY')} até ${moment(props.data.finalDate, 'YYYY/MM/DD').format('DD/MM/YYYY')}`}
				</p>
			</h4>
			<p>{'Participantes: ' + participants}</p>
			<p>Categoria: {props.data.category.description}</p>
			<button className="button" style={{ 'background': '#ffc107', 'borderColor': '#ffc107' }} onClick={props.update}>Atualizar</button>
			<button className="button" style={{ 'background': '#dc3545', 'borderColor': '#dc3545' }} onClick={() => props.delete(props.data.id)}>Deletar</button>
		</div>
	);
}

export default Card;