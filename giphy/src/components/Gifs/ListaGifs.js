import React, { Component } from 'react';
import './ListaGifs.css';

class ListaGifs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numGifs : 0
        }
    }

    componentWillReceiveProps(props) {
        this.setState({numGifs: props.length});
    }

    render() {
        return (
            <div className="container container-gifs">
                <div className="row">
                    <div className="card">
                        <img src="https://image.prntscr.com/image/i73CoVbvQhuYewigFCIgdQ.png" />
                        <p className="card-text">
                            Lorem Ipsum
                    </p>
                    </div>
                    <div className="card">
                        <img src="https://image.prntscr.com/image/i73CoVbvQhuYewigFCIgdQ.png" />
                        <p className="card-text">
                            Lorem Ipsum
                    </p>
                    </div>
                    <div className="card">
                        <img src="https://image.prntscr.com/image/i73CoVbvQhuYewigFCIgdQ.png" />
                        <p className="card-text">
                            Lorem Ipsum
                    </p>
                    </div>
                    <div className="card">
                        <img src="https://image.prntscr.com/image/i73CoVbvQhuYewigFCIgdQ.png" />
                        <p className="card-text">
                            Lorem Ipsum
                    </p>
                    </div>
                    <div className="card">
                        <img src="https://image.prntscr.com/image/i73CoVbvQhuYewigFCIgdQ.png" />
                        <p className="card-text">
                            Lorem Ipsum
                    </p>
                    </div>
                    <div className="card">
                        <img src="https://image.prntscr.com/image/i73CoVbvQhuYewigFCIgdQ.png" />
                        <p className="card-text">
                            Lorem Ipsum
                    </p>
                    </div>
                </div>
            </div>
        )
    };
}

export default ListaGifs;