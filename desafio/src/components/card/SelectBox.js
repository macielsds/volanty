import React, {Component} from 'react';
import arrow from '../..//arrow.svg';
import '../../App.scss'

class SelectBox extends Component {

    onChange(value) {
        this.props.onChangeEvent(value)
    }

    render() {
        let options = this.props.options.map((option) =>
                <option key={option.id} value={option.id}>{option.name}</option>
            );
        return (
            <div className="SelectBox">
                <label>{this.props.label}:</label>
                <div className="select-box">
                    <select onChange={this.onChange}>
                        <option value=''>Selecione</option>
                        {options}
                    </select>
                    <img src={arrow} className="select-arrow" alt="arrow" />
                </div>
            </div>
        );
    }
}

export default SelectBox;
