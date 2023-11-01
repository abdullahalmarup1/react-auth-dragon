import logo from '../../../assets/logo.png'
import moment from 'moment';


const Header = () => {
    return (
        <div className='text-center '>
            <img
                className='mx-auto py-4' src={logo} alt="Logo" />
            <p className='text-xl'>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;