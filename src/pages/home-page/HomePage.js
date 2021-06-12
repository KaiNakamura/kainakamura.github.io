import { Link } from 'react-router-dom';
import Hero from 'components/hero/Hero';
import Projects from 'components/projects/Projects';
import './HomePage.css';

const HomePage = () => (
	<div className='HomePage'>
		<Hero />
		<section className='Content'>
			<p>I like programming robots, websites, games, and whatever else comes to mind. Right now I'm pursuing a Bachelor's in Computer Science at <a href='https://wpi.edu' target='_blank' rel='noreferrer noopener'>WPI</a>.</p>
			<p>Check out some of the cool stuff I've been working on below. If you've got any questions or are interested in working with me feel free to <Link to='contact'>shoot me an email</Link>.</p>
		</section>
		<Projects />
	</div>
)

export default HomePage;
