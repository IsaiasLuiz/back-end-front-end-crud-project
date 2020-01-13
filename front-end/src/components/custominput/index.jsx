import React from 'react';


const style = {
    'display': 'block',
	'width': '450px',
	'height': '30px',
	'borderRadius': '5px',
	'marginTop': '20px',
	'marginBottom': '20px',
	'fontSize': '1.2em',
	'paddingLeft': '5px',
	'border': '1px solid rgb(54, 8, 8)',
}

const Input = props => (
    <input
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        style={style}
    />
);

export default Input;