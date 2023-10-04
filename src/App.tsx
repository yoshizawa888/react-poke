import './App.scss';
import Top from './pages/Top';
import Detail from './pages/Detail';
import { Routes, Route, Link, NavLink, Navigate } from 'react-router-dom';
import NoPage from './pages/404';

function App() {
	return (
		<>
			<ul>
				<li>
					<NavLink
						style={({ isActive }) =>
							isActive ? { color: 'green' } : undefined
						}
						to='/'
					>
						Top
					</NavLink>
				</li>
				<li>
					<Link to='/detail/1'>Detail</Link>
				</li>
			</ul>
			<Routes>
				<Route path='/' element={<Top />} />
				<Route path='/detail/:id' element={<Detail />} />
				<Route path='/detail' element={<Navigate to='/detail/1' />} />
				<Route path='*' element={<NoPage />} />
			</Routes>
		</>
	);
}

export default App;
