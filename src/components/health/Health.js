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
                        <td className="health_title"><span>Bruided</span></td>
                        <td className="health_value"><span></span></td>
                        <td><span className="health_bar">a</span></td>
                    </tr>
                    <tr>
                        <td className="health_title"><span>Hurt</span></td>
                        <td className="health_value"><span>-1</span></td>
                        <td><span className="health_bar">a</span></td>
                    </tr>
                    <tr>
                        <td className="health_title"><span>Injuried</span></td>
                        <td className="health_value"><span>-1</span></td>
                        <td><span className="health_bar">a</span></td>
                    </tr>
                    <tr>
                        <td className="health_title"><span>Wonded</span></td>
                        <td className="health_value"><span>-2</span></td>
                        <td><span className="health_bar">a</span></td>
                    </tr>
                    <tr>
                        <td className="health_title"><span>Mauled</span></td>
                        <td className="health_value"><span>-2</span></td>
                        <td><span className="health_bar">a</span></td>
                    </tr>
                    <tr>
                        <td className="health_title"><span>Crippled</span></td>
                        <td className="health_value"><span>-5</span></td>
                        <td><span className="health_bar">a</span></td>
                    </tr>
                    <tr>
                        <td className="health_title"><span>Incapacitated</span></td>
                        <td className="health_value"><span></span></td>
                        <td><span className="health_bar">a</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Health;