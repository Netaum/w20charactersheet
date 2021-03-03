import React from 'react';
import border from '../../assets/images/wwborder.svg';
import line from '../../assets/images/wwline.svg';
import line_small from '../../assets/images/wwline-small.svg';
import { useTranslation } from 'react-i18next';


import './Labels.css';

function Labels() {
    const { t } = useTranslation();
    return (
        <div>

            <div className='ww_base ww_border' >
                <img src={border} alt='border' />
            </div>

            <img src={line} alt='Line1' className='ww-line1' />
            <img src={line} alt='Line2' className='ww-line2' />
            <img src={line} alt='Line3' className='ww-line3' />
            <img src={line_small} alt='sline' className='ww-sline1' />
            <img src={line_small} alt='sline' className='ww-sline2' />
            <img src={line_small} alt='sline' className='ww-sline3' />
            <img src={line_small} alt='sline' className='ww-sline4' />
            <img src={line_small} alt='sline' className='ww-sline5' />
            <img src={line_small} alt='sline' className='ww-sline6' />
            <img src={line_small} alt='sline' className='ww-sline7' />


            <div className="label label_column1 label_line1 label_subtitle">
                <span className="label_background">{t('labels:physical')}</span>
            </div>
            <div className="label label_column2 label_line1 label_subtitle">
                <span className="label_background">{t('labels:social')}</span>
            </div>
            <div className="label label_column3 label_line1 label_subtitle">
                <span className="label_background">{t('labels:mental')}</span>
            </div>
            <div className="label label_column1 label_line2 label_subtitle">
                <span className="label_background">{t('labels:talents')}</span>
            </div>
            <div className="label label_column2 label_line2 label_subtitle">
                <span className="label_background">{t('labels:skills')}</span>
            </div>
            <div className="label label_column3 label_line2 label_subtitle">
                <span className="label_background">{t('labels:knowledges')}</span>
            </div>

            <div className="label label_column1 label_line3 label_subtitle">
                <span className="label_background">{t('labels:backgrounds')}</span>
            </div>
            <div className="label label_column2 label_line3 label_subtitle">
                <span className="">{t('labels:gifts')}</span>
            </div>
            <div className="label label_column3 label_line3 label_subtitle">
                <span className="">{t('labels:gifts')}</span>
            </div>

            <div className="label label_column1 label_line4 label_subtitle">
                <span className="label_background">{t('labels:renown')}</span>
            </div>
            <div className="label label_column2 label_line4 label_subtitle">
                <span className="label_background">{t('labels:rage')}</span>
            </div>
            <div className="label label_column3 label_line4 label_subtitle">
                <span className="label_background">{t('labels:health')}</span>
            </div>

            <div className="label label_column2 label_line5 label_subtitle">
                <span className="label_background">{t('labels:gnosis')}</span>
            </div>

            <div className="label label_column1 label_line6 label_subtitle">
                <span className="label_background">{t('labels:rank')}</span>
            </div>
            <div className="label label_column2 label_line6 label_subtitle">
                <span className="label_background">{t('labels:willpower')}</span>
            </div>
            <div className="label label_column3 label_line6 label_subtitle">
                <span className="label_background">{t('labels:experience')}</span>
            </div>

            <div className="label title_column1 title_line1 label_title">
                <span className="label_background">{t('labels:attributes')}</span>
            </div>
            <div className="label title_column1 title_line2 label_title">
                <span className="label_background">{t('labels:abilities')}</span>
            </div>
            <div className="label title_column1 title_line3 label_title">
                <span className="label_background">{t('labels:backgrounds')}</span>
            </div>
        </div>
        
    );
};

export default Labels;