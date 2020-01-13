import React, { Component } from 'react';
import { saveToken, CLIENT, PASSWORD_CLIENT, GRANT_TYPE } from '../../service/auth';
import Logo from '../../assets/login.png';
import './index.css';


export default class Login extends Component {
	state = {
		user: '',
		password: '',
		error: ''
	};

	componentDidMount = () => {
		document.title = 'Login';
	}

	handleSignIn = async (e) => {
		e.preventDefault();
		const { user, password } = this.state;
		if (!user || !password) {
			this.setState({ error: 'Preencha usuário e senha para continuar!' });
		} else {
			const params = new URLSearchParams();

			params.append('grant_type', GRANT_TYPE);
			params.append('username', user);
			params.append('password', password);

			const auth = btoa(CLIENT + ':' + PASSWORD_CLIENT);
			return fetch('http://localhost:8080/oauth/token', {
				headers: {
					Authorization: 'Basic ' + auth,
					'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
					'Access-Control-Allow-Origin': '*'
				},
				method: 'POST',
				body: params
			}).then(res => res.json())
				.then(res => {
					const token = res.access_token;
					if (token) {
						saveToken(res.access_token);
						this.props.history.push('/list-courses')
					} else {
						throw new Error();
					}
				})
				.catch((err) => {
					this.setState({
						error: 'Houve um problema com o login, verifique suas credenciais.'
					});
				});
		}
	};

	render() {
		return (
			<div className="login-container">
				<img src={Logo} className="logo-login" />

				<label className="logo-text">Login</label>

				<form className="form-login" onSubmit={this.handleSignIn}>
					{this.state.error && <div className="error-login">{this.state.error}</div>}
					<input
						type="text"
						value={this.state.user}
						placeholder="Usuario"
						onChange={(event) => {
							this.setState({ user: event.target.value });
						}}
					/>

					<input
						type="password"
						value={this.state.password}
						placeholder="senha"
						onChange={(event) => {
							this.setState({ password: event.target.value });
						}}
					/>

					<button className="button-login">Entrar</button>
				</form>
			</div>
		);
	}
}
