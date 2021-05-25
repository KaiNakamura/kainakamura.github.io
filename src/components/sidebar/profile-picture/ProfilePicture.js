import pfp from '../../../images/kai-nakamura.png';
import './ProfilePicture.css';
import { Link } from 'react-router-dom';

const ProfilePicture = () => (
	<Link to='/'>
		<img className='profile-picture' src={pfp} alt='Kai Nakamura' />
	</Link>
)

export default ProfilePicture;