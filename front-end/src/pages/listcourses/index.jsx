import React, { Component } from 'react';
import api from '../../service/api'
import { validDate } from '../../utils';
import Card from '../../components/card';
import TopBar from '../../components/topbar';
import Input from '../../components/custominput';
import './index.css';


export default class ListCourse extends Component {
    state = {
        description: '',
        courses: [],
        error: '',
        course: [],
        update: false,
        courseId: '',
        categoryIdUpdate: '',
        categories: [],
        descriptionUpdate: '',
        amountUpdate: '',
        startDateUpdate: '',
        finalDateUpdate: ''

    }

    handleRequest = req => {
        req.then(res => this.setState({ 'courses': res.data }))
            .catch(err => this.setState({ 'error': 'Ocoreu um erro na busca!' }))
    }


    searchByDescription = async e => {
        e.preventDefault();
        const { description } = this.state;
        if (description) {
            this.handleRequest(api.get(`/courses/search?description=${description}`));
        } else {
            this.handleRequest(api.get('/courses'));
        }
    }

    searchCourses = () => {
        this.handleRequest(api.get('/courses'));
    }

    componentDidMount = () => {
        document.title = 'Listar Cursos';
        this.searchCourses();
        api.get('/categories').then(
            res => {
                this.setState({ 'categories': res.data})
            })
            .catch(err => this.setState({ 'error': 'Não foi possível buscar as categorias!' }))
    }

    deleteCourse = id => {
        api.delete(`/courses/${id}`).then(res => {
            this.setState({ 'error': 'Curso deletado!' })
            this.searchCourses();
        })
            .catch(err => { this.setState({ 'error': 'Não foi possivel deletar!' }) });
    }

    validateDataForUpdate = () => {
        if (this.state.descriptionUpdate && this.state.amountUpdate && this.state.startDateUpdate && this.state.finalDateUpdate) {
            if (validDate(this.state.startDateUpdate, this.state.finalDateUpdate)) {
                return true;
            } else {
                this.setState({ 'error': 'Preencha as datas corretamente!' });
            }
        } else {
            this.setState({ 'error': 'Preencha todos os campos corretamente!' });
        }
        return false;
    }

    updateCourse = e => {
        e.preventDefault();
        this.setState({ 'update': false })
        if (this.validateDataForUpdate) {
            const object = {
                'id': this.state.courseId,
                'description': this.state.descriptionUpdate,
                'amount': this.state.amountUpdate,
                'startDate': this.state.startDateUpdate,
                'finalDate': this.state.finalDateUpdate,
                'categoryId': this.state.categoryIdUpdate
            }
            api.put('/courses', object).then(res => {
                this.searchCourses();
                this.setState({ 'error': 'Curso atualizado!' });
            })
                .catch(err => this.setState({ 'error': 'Não foi possivel atualizar!' }))
        } else {
            this.setState({ 'error': 'Preencha os dados corretamente!' })
        }

    }

    insertCategory = event => {
        const id = event.target.value;
        this.setState({ 'categoryIdUpdate': id });
    }

    enableUpdatescreen = course => {
        this.setState({
            'update': true,
            'courseId': course.id,
            'descriptionUpdate': course.description,
            'amountUpdate': course.amount,
            'startDateUpdate': course.startDate,
            'finalDateUpdate': course.finalDate,
            'categoryIdUpdate': course.category.code
        })
    }

    render() {
        return (
            <div>
                <TopBar />
                <div className="container">
                    <form className="search" onSubmit={this.searchByDescription}>
                        <input type="text" placeholder="Procure por descrição" value={this.state.description} onChange={event => this.setState({ 'description': event.target.value })} />
                        <button>Procurar</button>
                    </form>
                    {this.state.error && <div className="error">{this.state.error}</div>}
                    <div className="list-courses">
                        {
                            this.state.courses.map(course => (<Card data={course} key={course.id} delete={this.deleteCourse} update={() => this.enableUpdatescreen(course)} />))
                        }
                    </div>
                    {this.state.update &&
                        <div className="update-course">
                            <div className="update-container">
                                <form className="form-update" onSubmit={this.updateCourse}>
                                    <h2>Atualize seu curso aqui: <label onClick={() => this.setState({ 'update': false })}>X</label></h2>
                                    <Input type="text"
                                        value={this.state.descriptionUpdate}
                                        placeholder="Insira a descrição"
                                        onChange={e => this.setState({ 'descriptionUpdate': e.target.value })}
                                    />
                                    <Input type="number"
                                        value={this.state.amountUpdate}
                                        placeholder="Insira a quantidade de participantes"
                                        onChange={e => this.setState({ 'amountUpdate': e.target.value })}
                                    />
                                    <Input type="date"
                                        value={this.state.startDateUpdate}
                                        placeholder="Insira a data inicial"
                                        onChange={e => this.setState({ 'startDateUpdate': e.target.value })}
                                    />
                                    <Input type="date"
                                        value={this.state.finalDateUpdate}
                                        placeholder="Insira a data final"
                                        onChange={e => this.setState({ 'finalDateUpdate': e.target.value })}
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
                                    <button className="button-save">Atualizar</button>
                                </form>
                            </div>
                        </div>
                    }

                </div>
            </div>

        );
    }
}
