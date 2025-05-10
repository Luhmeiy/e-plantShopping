import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
	},
	reducers: {
		addItem: (state, action) => {
			const plant = action.payload;

			const existingPlant = state.items.find(
				(item) => item.name === plant.name
			);

			if (existingPlant) {
				existingPlant.quantity++;
			} else {
				state.items.push({ ...plant, quantity: 1 });
			}
		},
		removeItem: (state, action) => {
			state.items = state.items.filter(
				(item) => item.name !== action.payload
			);
		},
		updateQuantity: (state, action) => {
			const { name, quantity } = action.payload;

			const existingPlant = state.items.find(
				(item) => item.name === name
			);

			if (existingPlant) {
				existingPlant.quantity = quantity;
			}
		},
	},
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
