import Header from "./containers/Header";
import Content from "./containers/Content";
import Footer from "./containers/Footer";

function App() {
	console.log(process.env);
	return (
		<div className='App overflow-x-hidden'>
			<div className=''>
				<Header />
			</div>
			<div className=''>
				<Content />
			</div>
			<div className=''>
				<Footer />
			</div>
		</div>
	);
}

export default App;
