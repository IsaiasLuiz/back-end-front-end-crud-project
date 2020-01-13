import React, { Component } from 'react';
import { validDate } from '../../utils';
import api from '../../service/api'
import Input from '../../components/custominput';
import TopBar from '../../components/topbar';
import './index.css';

export default class RegistrerCourse extends Component {
    state = {
        description: '',
        amount: '',
        startDate: '',
        finalDate: '',
        categoryId: '',
        categories: [],
        error: ''
    }

    componentDidMount = () => {
        document.title = 'Registrar Cursos';
        api.get('/categories').then(
            res => {
                const categories = [...res.data];
                const id = categories.pop().code;
                this.setState({ 'categories': res.data, 'categoryId': id })
            })
            .catch(err => this.setState({ 'error': 'Não foi possível buscar as categorias!' }))
    }

    validateData = e => {
        e.preventDefault();
        if (this.state.description && this.state.amount && this.state.startDate && this.state.finalDate) {
            if (validDate(this.state.startDate, this.state.finalDate)) {
                this.saveCourse();
            } else {
                this.setState({ 'error': 'Preencha as datas corretamente!' })
            }
        } else {
            this.setState({ 'error': 'Preencha todos os campos corretamente!' })
        }
    }

    saveCourse = () => {
        const body = {
            description: this.state.description,
            amount: this.state.amount,
            startDate: this.state.startDate,
            finalDate: this.state.finalDate,
            categoryId: this.state.categoryId,
        }

        api.post('/courses', body).then(res => {
            this.setState({
                'error': 'Curso Salvo!',
                'description': '',
                'amount': '',
                'startDate': '',
                'finalDate': ''
            })
        })
            .catch(err => this.setState({ 'error': 'Não foi possível Salvar!' }))

    }

    insertCategory = event => {
        const id = event.target.value;
        this.setState({ 'categoryId': id });
    }

    render() {
        return (
            <div>
                <TopBar />
                <div className="register-course">
                    <form onSubmit={this.validateData}>
                        <h2>Registre seu curso aqui:</h2>
                        {this.state.error && <div className="error">{this.state.error}</div>}
                        <Input type="text" value={this.state.description}
                            placeholder="Insira a descrição"
                            onChange={e => this.setState({ 'description': e.target.value })}
                        />
                        <Input type="number" value={this.state.amount}
                            placeholder="Insira a quantidade de participantes"
                            onChange={e => this.setState({ 'amount': e.target.value })}
                        />
                        <Input type="date" value={this.state.startDate}
                            placeholder="Insira a data inicial"
                            onChange={e => this.setState({ 'startDate': e.target.value })}
                        />
                        <Input type="date" value={this.state.finalDate}
                            placeholder="Insira a data final"
                            onChange={e => this.setState({ 'finalDate': e.target.value })}
                        />
                        <select className="categories-select"
                            onChange={this.insertCategory}
                        >
                            {
                                this.state.categories.map(
                                    category => (<option key={category.code}
                                        value={category.code}>{category.description}</option>)
                                )
                            }
                        </select>
                        <button className="button-save">Salvar</button>
                    </form>
                </div>
            </div>
        );
    }
}