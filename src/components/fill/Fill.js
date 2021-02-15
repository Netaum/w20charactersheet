import React from 'react';
import SheetContext from '../../contexts/SheetContext';
import './Fill.css';

class Fill extends React.Component {
    static contextType = SheetContext;

    constructor(props, context) {
        super(props, context);

        this.section = props.section;

        this.left = props.left;
        this.top = props.top;

        this.fillChar = "e";
        this.emptyChar = "d";
    }

    handleClick(index) {
        this.context.changeSection(this.section, index);
    }

    item(index, value) {
        const displayChar = value ? this.fillChar : this.emptyChar;
        return (
            <span key={index}
                vl={index}
                onClick={() => this.handleClick(index)}>{displayChar}</span>
        );
    }

    line() {
        const values = this.section.fill;
        const spanStyle = {
            left: this.left,
            top: this.top
        };

        return (
            <span id={this.props.attributeName}
                className='wod'
                style={spanStyle}>
                {values.map((e, i) => (
                    this.item(i, e)
                ))}
            </span>
        );
    }

    render() {
        return (
            <div>
                {this.line()}
            </div>
        );
    }
}

export default Fill;