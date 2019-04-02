import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import NewProject from './NewProject'
import ProjectsList from './ProjectsList'
import SingleProject from './SingleProject'

// Esta clase nos servirá de base para todos nuestros componentes React
class App extends Component {
    render () {
        return (
            <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={ProjectsList} />
                    {/* La ruta al create la especificamos en el componente: ProjectsList */}
                    <Route path='/create' component={NewProject} />
                    <Route path='/:id' component={SingleProject} />
                </Switch>
            </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
