"use client";
import React, { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux"; // Correctly import Provider from react-redux
import store from "../redux/store";

interface CustomProviderProps {
  children: ReactNode;
}

const CustomProvider: React.FC<CustomProviderProps> = ({ children }) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default CustomProvider;
