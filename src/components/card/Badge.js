import React, {Component} from 'react';
import '../../App.scss'

const endpoint = '//www.carimagery.com/api.asmx/GetImageUrl?searchTerm='
const imageDefault = 'http://denrakaev.com/wp-content/uploads/2015/03/no-image-800x511.png'

class Badge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: imageDefault
        }
    }

    componentDidMount() {
        if(this.props.keywords !== '') {
            this.getCarImage(this.props.keywords)
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.keywords !== prevProps.keywords) {
            if (this.props.keywords !== '') {
                this.getCarImage(this.props.keywords)
            }
        }
    }

    getCarImage(keyword) {
        if(keyword === '' || keyword === undefined) return false

        fetch(endpoint + keyword)
            .then(response => response.text())
            .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
            .then(data => {
                let srcTag = data.getElementsByTagName("string")[0] || false
                let src = (srcTag) ? srcTag.childNodes[0] : false
                if(src) {
                    this.setState({imageURL: src.nodeValue})
                }
            });
    }

    render() {
        return (
            <div className="Badge">
                <figure className="Badge__box">
                    <img className="Badge__image" alt='' src={this.state.imageURL}/>
                </figure>
            </div>
        );
    }
}

export default Badge;
