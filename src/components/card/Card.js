import React, {Component} from 'react';
import Badge from './Badge'
import CalculatorForm from './CalculatorForm'
import '../../App.scss'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords: ''
        }

        this.updateSelection = this.updateSelection.bind(this);
    }

    updateSelection(keywords) {
      let keywordString = keywords.join('+').replace(/ /g, '+')
      this.setState({
        keywords: keywordString
      })
    }

    render() {
        return (
          <div className="Card">
            <header className="Card-header">
                <Badge keywords={this.state.keywords}/>
            </header>
            <CalculatorForm onUpdateSelection={this.updateSelection}/>
          </div>
        );
    }
}

export default Card;
