import './NotFoundPage.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
	<div className='NotFoundPage'>
		<section className='Content'>
			<h1>404: Page Not Found</h1>
			<Link to='/'>Go to Home</Link>
		</section>
	</div>
)

export default NotFoundPage;
