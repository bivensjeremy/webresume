import Blueprint from "./components/Blueprint";
import Education from "./components/Education";
import MobileMenu from "./components/MobileMenu";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Splash from "./components/Splash";
import WorkHistory from "./components/WorkHistory";

export default function Home() {
	return (
		<>
		<main className='w-100 lg:w-2/3 m-auto px-3'>
			<div className='block lg:hidden fixed right-5 top-5'>
				<MobileMenu />
			</div>

			<Splash />
			<Profile />
			<Portfolio />
			<Skills />
			<WorkHistory /> 
			<Education />
			<Blueprint />
		</main>

		<aside className='hidden lg:block w-1/3 bg-[#bfdbfe]'>
			<NavBar />
		</aside>

		</>
	)
}
