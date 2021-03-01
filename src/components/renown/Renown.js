import React from 'react';
import { withTranslation } from "react-i18next";
import SheetContext from '../../contexts/SheetContext';
import Fill from '../fill/Fill';
import './Renown.css';

class Renown extends React.Component {
    static contextType = SheetContext;

    constructor(props, context) {
        super(props, context);

        this.glory = context.loadSection('renown', 'glory', 'permanent');
        this.honor = context.loadSection('renown', 'honor', 'permanent');
        this.wisdom = context.loadSection('renown', 'wisdom', 'permanent');

    }

    render() {
        const { t } = this.props;
        return (
            <div>
                <div><span className='renown_label renown_label_line1'>{t('labels:glory')}</span></div>
                <div>
                    <Fill section={this.glory} left="60px" top="806px" size="18px" letter_spacing="2px" />
                </div>
                <div><span className='renown_label renown_label_line2'>{t('labels:honor')}</span></div>
                <div>
                    <span className='wod renown renown_line1'>aaaaaaaaaa</span>
                </div>
                <div>
                    <Fill section={this.honor} left="60px" top="862px" size="18px" letter_spacing="2px" />
                </div>
                <div>
                    <span className='wod renown renown_line2'>aaaaaaaaaa</span>
                </div>
                <div><span className='renown_label renown_label_line3'>{t('labels:wisdom')}</span></div>
                <div>
                    <Fill section={this.wisdom} left="60px" top="920px" size="18px" letter_spacing="2px" />
                </div>
                <div>
                    <span className='wod renown renown_line3'>aaaaaaaaaa</span>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Renown);