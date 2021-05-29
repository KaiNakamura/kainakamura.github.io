import Projects from '../../components/projects/Projects';
import pfp from '../../images/kai-nakamura.png';
import './HomePage.css';

const HomePage = () => (
	<div className='HomePage'>
		<section className='Hero'>
			<div className='Title'>
				<h1>Hi, I'm Kai</h1>
				<h2>Software Dev / Student</h2>
			</div>
			<img className='ProfilePicture' src={pfp} alt='Kai Nakamura' />
		</section>
		<div className='Arrow'>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
		<section className='Content'>
			<p>Lorem ipsum <b>dolor sit amet</b>, consectetur adipiscing elit. Nam euismod dignissim magna, nec ultricies sem tempus nec.</p>
			<p>Donec at nisl ut quam <i>ultrices pretium feugiat</i> convallis lectus. Integer condimentum velit id orci scelerisque, at condimentum massa sodales.</p>
		</section>
		<Projects />
	</div>
)

export default HomePage;
