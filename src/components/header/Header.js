import React from "react";
import { withTranslation } from 'react-i18next';
import './Header.css';

class Header extends React.Component {
    render () {
        const { t } = this.props;
        return (
            <div>
                <div>
                    <div className='header column1 line1'>
                        <span>{t('header:name')}:</span>
                        <input type='text' />
                    </div>
                    <span className='header column1 line2'>{t('header:player')}:</span>
                    <span className='header column1 line3'>{t('header:chronicle')}:</span>
                </div>
                <div>
                    <span className='header column2 line1'>{t('header:breed')}:</span>
                    <span className='header column2 line2'>{t('header:auspice')}:</span>
                    <span className='header column2 line3'>{t('header:tribe')}:</span>
                </div>
                <div>
                    <span className='header column3 line1'>{t('header:pack_name')}:</span>
                    <span className='header column3 line2'>{t('header:pack_totem')}:</span>
                    <span className='header column3 line3'>{t('header:concept')}:</span>
                </div>
            </div>
        )
    };
}

export default withTranslation()(Header);