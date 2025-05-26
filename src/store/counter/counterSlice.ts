import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    count: number;
    isReady: boolean;
}

const initialState: CounterState = {
    count: 0,
    isReady: false
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setIsReady: (state, action: PayloadAction<number>) => {
            if (state.isReady) return;
            state.isReady = true;
            state.count = action.payload;
        },
        increaseCount: (state) => {
            state.count++;
        },
        decreaseCount: (state) => {
            if (state.count === 0) return;
            state.count--;
        },
        resetCountTo: (state, action: PayloadAction<number>) => {
            if (action.payload < 0) action.payload = 0;
            state.count = action.payload;
        }
    }
});

export const { increaseCount, decreaseCount, resetCountTo, setIsReady } = counterSlice.actions

export default counterSlice.reducer