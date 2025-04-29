import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Header from "./components/Header";
import Orders from "./pages/Orders";
import Search from "./pages/Search";
import Profile from "./pages/Profile";

function App() {
	return (
		<>
			<BrowserRouter>
				<div className="h-screen relative">
					<Header />
					<div className="fixed bottom-0 w-full max-w-[500px]">
						<Nav />
					</div>
					<div className="py-[56px] w-[95%] mx-auto">
						<Routes>
							<Route
								path="/"
								element={<Home />}
							/>
							<Route 
								path="/orders"
								element={<Orders/>}
							/>
							<Route 
								path="/"
								element={<Search/>}
							/>
							<Route 
								path="/"
								element={<Profile/>}
							/>
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
