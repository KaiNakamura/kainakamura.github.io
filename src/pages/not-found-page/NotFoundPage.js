import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => (
	<div className="NotFoundPage">
		<h1>404: Page Not Found</h1>
		<Link to="/">Go to Home</Link>
	</div>
)

export default NotFoundPage;
