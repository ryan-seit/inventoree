import Header from "./containers/Header";
import Content from "./containers/Content";
import Footer from "./containers/Footer";

function App() {
	console.log(process.env);
	return (
		<div className='App'>
			<div>
				<Header />
			</div>
			<div>
				<Content />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
