import React from "react";
import "./App.css";
import {ToastProvider} from "react-toast-notifications";
import {MainChess} from "./MainChess";

const App: React.FC = () => {
  return (
    <ToastProvider placement={'top-right'} autoDismiss={true} autoDismissTimeout={10000} >
      <MainChess />
    </ToastProvider>
  );
};

export default App;
