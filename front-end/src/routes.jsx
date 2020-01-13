import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/login';
import ListCourse from './pages/listcourses';
import RegisterCourses from './pages/registercourses'
import NotFound from './pages/notfound';
import { isAuthenticated } from './service/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			isAuthenticated() ? (
				<Component {...props} />
			) : (
					<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
				)}
	/>
);

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={() => (<Redirect to={{ pathname: '/login' }} />)} />
				<Route path="/login" component={isAuthenticated() ? () => (<Redirect to={{ pathname: '/list-courses' }} />) : Login} />
				<Route path="/login" component={Login} />
				<PrivateRoute path="/list-courses" component={ListCourse} />
				<PrivateRoute path="/register-courses" component={RegisterCourses} />
				<Route path="*" component={NotFound} />
			</Switch>
		</BrowserRouter>
	)
};

export default Routes;
