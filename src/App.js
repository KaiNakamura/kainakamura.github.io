import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import NotFoundPage from './pages/not-found-page/NotFoundPage';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
	<Router>
		<div className='App'>
			<Navbar />
			<Sidebar />
			<div className='Content'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/projects' component={Projects} />
					<Route path='/contact' component={Contact} />
					<Route path='*' component={NotFoundPage} />
				</Switch>
			</div>
			<Footer />
		</div>
	</Router>
)

export default App;
