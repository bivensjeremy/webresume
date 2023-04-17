import './globals.css'
import NavBar from './components/NavBar'
import MobileMenu from './components/MobileMenu'

export const metadata = {
	title: "Bivens Online Resume",
	description: "",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className='bg-blue-50 flex'>
				{children}
			</body>
		</html>
	)
}
