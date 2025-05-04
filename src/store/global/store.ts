import { create } from 'zustand';
import { GlobalActions, GlobalState } from './type';

const useGlobalStore = create<GlobalState & GlobalActions>((set, get) => ({
	loading: false,
	error: [],
	setLoading: (loading) => set({ loading }),
	addError: (error) => set({ error: [...get().error, error] }),
	clearError: () => set({ error: [] }),
	removeError: (error) => set({ error: get().error.filter((item) => item.key !== error) }),
}));

export default useGlobalStore
