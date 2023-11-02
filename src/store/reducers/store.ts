import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import todoReducer from "./toDoReducer/index";

const appReducer = combineReducers({ todoReducer });

export const store = configureStore({
  reducer: appReducer,
});

export type AppStateType = ReturnType<typeof appReducer>;
export type AppDispatchType = typeof store.dispatch;

export const useAppDispatch: () => AppDispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;
