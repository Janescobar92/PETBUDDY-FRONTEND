import React, { useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			state.actions.getWhoHireYouHistory();
			state.actions.getLogedUser();
			state.actions.getInputValuesAnimalType();
			state.actions.getInputValuesPetCharacters();
			console.log(localStorage.getItem("x-access-token"));
			if (localStorage.getItem("x-access-token") != null) {
				state.actions.getLocalSorageToken();
			}
		}, []);

		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
