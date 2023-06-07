import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Content from './components/Content';
import { useRef } from 'react';

function App() {
	const aboutRef = useRef();
	const skillsRef = useRef();
	const requirementsRef = useRef();
	const galleryRef = useRef();
	const opportunitiesRef = useRef();
	const registrationRef = useRef();

	const refs = [ aboutRef, skillsRef, requirementsRef, galleryRef, opportunitiesRef, registrationRef ]

	const aboutClick = () => { aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
	const skillsClick = () => { skillsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
	const requirementsClick = () => { requirementsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
	const galleryClick = () => { galleryRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
	const opportunitiesClick = () => { opportunitiesRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
	const registrationClick = () => { registrationRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' }); }

	const funcs = [ aboutClick, skillsClick, requirementsClick, galleryClick, opportunitiesClick, registrationClick ]

	return (
		<>
			<Header funcs={ funcs } />
			<Content refs={ refs } />
		</>
	);
}

export default App;
