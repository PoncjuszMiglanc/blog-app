import { Outlet } from 'react-router-dom';
import TheNav from './Components/TheNav';
import TheFooter from './Components/TheFooter';

const Layout = () => {
	return (
		<>
			<TheNav />
			<Outlet />
			<TheFooter />
		</>
	);
};

export default Layout;
