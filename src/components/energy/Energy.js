import React from 'react';
import SheetContext from '../../contexts/SheetContext';
import Fill from '../fill/Fill';
import './Energy.css';

class Energy extends React.Component {
    static contextType = SheetContext;

    constructor(props, context) {
        super(props, context);

        this.rage = context.loadSection('rage');
        this.gnosis = context.loadSection('gnosis');
        this.willpower = context.loadSection('willpower');

    }

    render() {
        return (
            <div>
                <div>
                    <Fill section={this.rage} left="302px" top="787px" size="18px" letter_spacing="2px" />
                </div>
                <div>
                    <span className='wod energy energy_line1'>aaaaaaaaaa</span>
                </div>
                <div>
                    <Fill section={this.gnosis} left="302px" top="888px" size="18px" letter_spacing="2px" />
                </div>
                <div>
                    <span className='wod energy energy_line2'>aaaaaaaaaa</span>
                </div>
                <div>
                    <Fill section={this.willpower} left="302px" top="991px" size="18px" letter_spacing="2px" />
                </div>
                <div>
                    <span className='wod energy energy_line3'>aaaaaaaaaa</span>
                </div>
            </div>
        );
    }
}

export default Energy;