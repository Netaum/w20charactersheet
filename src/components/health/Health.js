import React from 'react';
import { useTranslation } from 'react-i18next';
import './Health.css';

function Health() {
    const { t } = useTranslation();
    return (
        <div className="health_table">
            <table>
                <tbody>
                    <tr>
                        <td className="health_title"><span>{t('health:bruised')}</span></td>
                        <td className="health_value"><span></span></td>
                        <td><span className="health_bar">a</span></td>
                    </tr>
                    <tr>
                        <td className="health_title"><span>{t('health:hurt')}</span></td>
                        <td className="health_value"><span>-1</span></td>
                        <td><span className="health_bar">a</span></td>
                    </tr>
                    <tr>
                        <td className="health_title"><span>{t('health:injuried')}</span></td>
                        <td className="health_value"><span>-1</span></td>
                        <td><span className="health_bar">a</span></td>
                    </tr>
                    <tr>
                        <td className="health_title"><span>{t('health:wounded')}</span></td>
                        <td className="health_value"><span>-2</span></td>
                        <td><span className="health_bar">a</span></td>
                    </tr>
                    <tr>
                        <td className="health_title"><span>{t('health:mauled')}</span></td>
                        <td className="health_value"><span>-2</span></td>
                        <td><span className="health_bar">a</span></td>
                    </tr>
                    <tr>
                        <td className="health_title"><span>{t('health:crippled')}</span></td>
                        <td className="health_value"><span>-5</span></td>
                        <td><span className="health_bar">a</span></td>
                    </tr>
                    <tr>
                        <td className="health_title"><span>{t('health:incapacitated')}</span></td>
                        <td className="health_value"><span></span></td>
                        <td><span className="health_bar">a</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Health;