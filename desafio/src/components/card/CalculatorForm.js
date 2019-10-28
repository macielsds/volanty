import React, {Component} from 'react';
import Results from '../calculator/Results'
import SelectBox from './SelectBox'
import '../../App.scss'

const endpoint = 'http://fipeapi.appspot.com/api/1/carros/'

class CalculatorForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brands: [],
            models: [],
            years: [],
            brand: '',
            model: '',
            year: '',
            selectedCar: false
        }

        this.onSelectBrand = this.onSelectBrand.bind(this);
        this.onSelectModel = this.onSelectModel.bind(this);
        this.onSelectYear = this.onSelectYear.bind(this);
        this.updateimage = this.updateimage.bind(this);
    }

    componentDidMount() {
        let initialBrands = [];
        fetch(`${endpoint}/marcas.json`)
            .then(response => {
                return response.json();
            }).then(data => {
                initialBrands = data.map((brand) => {
                    return brand
                });
                this.setState({
                    brands: initialBrands,
                });
            });
    }

    updateimage() {
        let keys = []
        if(this.state.brand !== '') {
            const brand = this.state.brand
            const brands = this.state.brands
            const brandObj = brands.find(b => parseInt(b.id) === parseInt(brand));
            keys.push(brandObj.fipe_name)
        }
        if(this.state.model !== '') {
            const model = this.state.model
            const models = this.state.models
            const modelObj = models.find(m => parseInt(m.id) === parseInt(model));
            keys.push(modelObj.fipe_name.split(' ')[0])
        }
        if(this.state.year !== '') {
            const year = this.state.year
            const years = this.state.years
            const yearObj = years.find(y => parseInt(y.id) === parseInt(year));
            keys.push(yearObj.name.split(' ')[0])
        }
        this.props.onUpdateSelection(keys);
    }

    onSelectBrand(event) {
        let selectedBrand = event.target.value

        if(selectedBrand === '') {
            this.setState({selectedCar: false, brand: '', models: [], model: '', years: [], year: ''})
            return false
        }
        let models = []

        this.setState({brand: selectedBrand, models: [], model: '', years: [], year: '', selectedCar: false})
        
        fetch(`${endpoint}/carros/veiculos/${selectedBrand}.json`)
            .then(response => {
                return response.json();
            }).then(data => {
                models = data.map((model) => {
                    return model
                });
                this.setState({models: models});
                this.updateimage()
            });
    }

    onSelectModel(event) {
        let selectedModel = event.target.value
        if(selectedModel === '') {
            this.setState({model: '', year: '', years: [], selectedCar: false})
            return false
        }

        let selectedBrand = this.state.brand
        let years = []

        this.setState({model: selectedModel, years: [], year: '', selectedCar: false})
        
        fetch(`${endpoint}/carros/veiculo/${selectedBrand}/${selectedModel}.json`)
            .then(response => {
                return response.json();
            }).then(data => {
                years = data.map((year) => {
                    return year
                });
                this.setState({years: years})
                this.updateimage()
            });
    }

    onSelectYear(event) {
        let selectedYear = event.target.value
        if(selectedYear === '') {
            this.setState({year: '', selectedCar: false})
            return false
        }

        let selectedBrand = this.state.brand
        let selectedModel = this.state.model

        this.setState({year: selectedYear})
        
        fetch(`${endpoint}/carros/veiculo/${selectedBrand}/${selectedModel}/${selectedYear}.json`)
            .then(response => {
                return response.json();
            }).then(data => {
                if(!data) return false
                this.setState({selectedCar: data})
                this.updateimage()
            });
    }

    render() {
        return (
            <div className="CalculatorForm">
                <form>
                    <SelectBox label="Marca" options={this.state.brands} onChangeEvent={this.onSelectBrand}/>
                    {this.state.models.length > 0? <SelectBox label="Modelo" options={this.state.models} onChangeEvent={this.onSelectModel}/> : null}
                    {this.state.years.length > 0? <SelectBox label="Ano" options={this.state.years} onChangeEvent={this.onSelectYear}/> : null}
                </form>
                { this.state.selectedCar ? <Results showSelectedCar={this.state.selectedCar} /> : null }
            </div>
        );
    }
}

export default CalculatorForm;
