type error = {
	key: string;
	value: string;
};

export interface GlobalState {
	loading: boolean;
	error: error[];
}

export interface GlobalActions {
	setLoading: (loading: boolean) => void;
	addError: (error: error) => void;
	clearError: () => void;
	removeError: (key: string) => void;
}
