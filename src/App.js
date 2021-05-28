import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import NotFoundPage from './pages/not-found-page/NotFoundPage';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
	<Router>
		<div className='App'>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/projects' component={Projects} />
				<Route path='/contact' component={Contact} />
				<Route path='*' component={NotFoundPage} />
			</Switch>
			<Footer />
		</div>
	</Router>
)

export default App;
