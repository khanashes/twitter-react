import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/home';
import LoginForm from './components/forms/loginForm';
import RegistrationForm from './components/forms/registrationForm';
import ErrorPage from './pages/errorPage';
import ProtectedRoute from './services/hocFunctions/protectedRoute';
import store from './store/store';

const App: React.FC = () => (
    <Provider store={store}>
        <div className="App">
            <Switch>
                <ProtectedRoute exact path="/" component={Home} redirectPath="/login" />
                <Route path="/login" component={LoginForm} exact />
                <Route path="/register" component={RegistrationForm} exact />
                <Route component={ErrorPage} />
            </Switch>
        </div>
    </Provider>
);

export default App;
