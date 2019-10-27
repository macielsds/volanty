import React, {Component} from 'react';
import '../../App.scss'

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            referencia: '',
            fipe_codigo: '',
            name: '',
            combustivel: '',
            marca: '',
            ano_modelo: '',
            preco: '',
            key: '',
            time: '',
            veiculo: '',
            id: ''
        }
    }

    componentDidMount() {
        let showSelectedCar = this.props.showSelectedCar

        if(showSelectedCar) {
            this.setState({
                fipe_codigo: showSelectedCar.fipe_codigo,
                name: showSelectedCar.name,
                combustivel: showSelectedCar.combustivel,
                marca: showSelectedCar.marca,
                ano_modelo: showSelectedCar.ano_modelo,
                preco: showSelectedCar.preco,
                key: showSelectedCar.key,
                time: showSelectedCar.time,
                id: showSelectedCar.id
            })
        }
    }

    componentDidUpdate(prevProps) {
        if ((this.props.showSelectedCar.key !== prevProps.showSelectedCar.key) || !prevProps.showSelectedCar) {
            let showSelectedCar = this.props.showSelectedCar

            this.setState({
                fipe_codigo: showSelectedCar.fipe_codigo,
                name: showSelectedCar.name,
                combustivel: showSelectedCar.combustivel,
                marca: showSelectedCar.marca,
                ano_modelo: showSelectedCar.ano_modelo,
                preco: showSelectedCar.preco,
                key: showSelectedCar.key,
                time: showSelectedCar.time,
                id: showSelectedCar.id
            })
        }
    }

    render() {
        return (
          <div className="Results">
              <h2>Encontramos o seu carro!</h2>
              <table className="Results__table">
                  <tbody>
                        <tr><th>Código FIPE:</th><td>{this.state.fipe_codigo}</td></tr>
                        <tr><th>Nome:</th><td>{this.state.name}</td></tr>
                        <tr><th>Combustível:</th><td>{this.state.combustivel}</td></tr>
                        <tr><th>Marca:</th><td>{this.state.marca}</td></tr>
                        <tr><th>Ano Modelo:</th><td>{this.state.ano_modelo}</td></tr>
                        <tr><th>Preço:</th><td>{this.state.preco}</td></tr>
                  </tbody>
              </table>
          </div>
        );
    }
}

export default Results;
