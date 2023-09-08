"use client"
import { store } from "@/store/store";
import { Provider } from "react-redux";


export function ProviderState({ children }) {
    return <Provider store={store}>{children}</Provider>;
}