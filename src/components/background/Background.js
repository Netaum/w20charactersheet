
import React from 'react';
import { withTranslation } from "react-i18next";
import SheetContext from '../../contexts/SheetContext';
import Fill from '../fill/Fill';
import './Background.css';

class Background extends React.Component {
    static contextType = SheetContext;

    constructor(props, context) {
        super(props, context);

        this.backgrounds = context.loadBackgrounds();
    }

    handleChange(bgName, index)
    {
       this.context.changeBackground(bgName, index);
    }

    background(index) {
        const { t } = this.props;
        const selectedBg = this.context.sheet.advantages.backgrounds.itens[index-1];
        const itens = [];
        itens.push(<option className="background_font" key="none" data-key='none'></option>);
        this.context.getBackgroundList().forEach((f, i) => 
            itens.push(<option className="background_font" key={f} data-key={i}>{t(`backgrounds:${f}`)}</option>)
        );
        return (
        <select className="background_font" onChange={(e) => this.handleChange(e.target.value, index)} value={t(`backgrounds:${selectedBg.name}`)}>
            {itens}
        </select>
        );
    }

    render() {
        return (
            <div>
                <Fill section={this.backgrounds[0]} left="200px" top="666px" size="14px" />
                <Fill section={this.backgrounds[1]} left="200px" top="684px" size="14px" />
                <Fill section={this.backgrounds[2]} left="200px" top="702px" size="14px" />
                <Fill section={this.backgrounds[3]} left="200px" top="720px" size="14px" />
                <Fill section={this.backgrounds[4]} left="200px" top="738px" size="14px" />

                <div>
                    <hr className="background_line background_line_1" />
                    <hr className="background_line background_line_2" />
                    <hr className="background_line background_line_3" />
                    <hr className="background_line background_line_4" />
                    <hr className="background_line background_line_5" />
                    <div className="background_select background_select_1" >
                        {this.background(1)}
                    </div>
                    <div className="background_select background_select_2" >
                        {this.background(2)}
                    </div>
                    <div className="background_select background_select_3" >
                        {this.background(3)}
                    </div>
                    <div className="background_select background_select_4" >
                        {this.background(4)}
                    </div>
                    <div className="background_select background_select_5" >
                        {this.background(5)}
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Background);
