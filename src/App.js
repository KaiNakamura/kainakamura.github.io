import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/home-page/HomePage';
import ProjectsPage from './pages/projects-page/ProjectsPage';
import MusicPage from './pages/music-page/MusicPage';
import ContactPage from './pages/contact-page/ContactPage';
import NotFoundPage from './pages/not-found-page/NotFoundPage';
import ScrollToTop from './util/ScrollToTop';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
	<Router>
		<div className='App'>
			<Header />
			<ScrollToTop />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/projects' component={ProjectsPage} />
				<Route path='/music' component={MusicPage} />
				<Route path='/contact' component={ContactPage} />
				<Route path='*' component={NotFoundPage} />
			</Switch>
			<Footer />
		</div>
	</Router>
)

export default App;
