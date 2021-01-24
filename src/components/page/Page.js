import './Page.css'
import wwlogo from '../../assets/images/wwlogo.svg';

function Page() {
    return (
        <div className='WW-Page'>
            <img src={wwlogo} alt='logo' className='WW-Logo' />

            <div className='Box'>
                <span>Texto</span>
            </div>
        </div>
    );
}

export default Page;