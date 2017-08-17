import React, { Component } from 'react';

class BuscarUsuario extends Component {
    submit(e) {
        e.preventDefault();
         console.log(this.refs.username.value);
     }
     
    render() {
        return (
            <div className="jumbotron">
            <h1>Github Info</h1>
            <div className="row">
                <form onSubmit={this.submit.bind(this)}>
                    <div className="form-group">
                        <label>Nome de usuário</label>
                        <input
                            type="text"
                            ref="username"
                            className="form-control"
                            placeholder="Ex: andrefelizardo"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Buscar</button>
                </form>
            </div>
        </div>
        );
    }
}

export default BuscarUsuario;