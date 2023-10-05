import './App.scss';
import Top from './pages/Top';
import Detail from './pages/Detail';
import { Routes, Route, Navigate } from 'react-router-dom';
import NoPage from './pages/404';

function App() {
	return (
		<>
			{/* <ul>
				<li>
					<NavLink
						style={({ isActive }) =>
							isActive ? { color: 'green' } : undefined
						}
						to='/react-poke/'
					>
						Top
					</NavLink>
				</li>
				<li>
					<Link to='/detail/1'>Detail</Link>
				</li>
			</ul> */}
			<Routes>
				<Route path='/react-poke/' element={<Top />} />
				<Route path='/react-poke/detail/:id' element={<Detail />} />
				<Route
					path='/react-poke/detail'
					element={<Navigate to='/react-poke/detail/1' />}
				/>
				<Route path='*' element={<NoPage />} />
			</Routes>
		</>
	);
}

export default App;
