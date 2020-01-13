import React from 'react';
import { removeToken } from '../../service/auth';
import { Link } from 'react-router-dom'
import './index.css'

const TopBar = () => {
	const style = {
		'color': 'rgb(187, 14, 14)',
		'textDecoration': 'none'
	};

	const logout = () => {
		removeToken();
	}

	return (
		<div className="top-bar">
			Course Management
			<ul className="course-list">
				<li><Link to="/list-courses" style={style}>Listar Cursos</Link></li>
				<li><Link to="/register-courses" style={style}>Cadastrar Cursos</Link></li>
				<li><Link onClick={logout} to="/" style={style}>logout</Link></li>
			</ul>
		</div>
	);
};

export default TopBar;
