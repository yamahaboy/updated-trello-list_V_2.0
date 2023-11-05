import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import todoReducer from "./toDoReducer/index";
import thunk, { ThunkDispatch } from "redux-thunk";

const appReducer = combineReducers({ todoReducer });

export const store = configureStore({
  reducer: appReducer,
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), thunk]
});

export type AppStateType = ReturnType<typeof appReducer>;
export type AppDispatchType = ThunkDispatch<AppStateType, null, AnyAction>;

export const useAppDispatch: () => AppDispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;
