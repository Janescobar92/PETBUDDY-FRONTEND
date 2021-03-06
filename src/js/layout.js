import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Paymentmade } from "./views/paymentmade";
import { Services } from "./views/services";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Profile } from "./views/profile";
import { OthersProfile } from "./views/others_profile";
import { History } from "./views/history";
import { Landing } from "./views/landing";
import { Context } from "./store/appContext";

const Layout = () => {
	const { store, actions } = useContext(Context);
	const basename = process.env.BASENAME || "";
	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Landing />
						</Route>
						<Route exact path="/home/:id_user">
							<Home />
						</Route>
						<Route exact path="/payment/made/:id_user">
							<Paymentmade />
						</Route>
						<Route exact path="/profile/:id_user">
							<Profile />
						</Route>
						<Route exact path="/outprofile/:id_user">
							<OthersProfile />
						</Route>
						<Route exact path="/history/:id_use">
							<History />
						</Route>
						<Route exact path="/services/:service_type">
							<Services />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
