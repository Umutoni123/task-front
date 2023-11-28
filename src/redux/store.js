import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import authReducer from '../redux/slices/authSlices';
import tasksReducer from '../redux/slices/tasksSlice';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        auth: persistedReducer,
        tasks: tasksReducer
    },
    middleware: [thunk],
})

export const persistor = persistStore(store);
