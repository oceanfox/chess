import React from "react";
import "./App.css";
import {ToastProvider} from "react-toast-notifications";
import {MainChess} from "./MainChess";
import {News} from "./News";


const App: React.FC = () => {
  return (
    <ToastProvider placement={'top-right'} autoDismiss={true} autoDismissTimeout={10000}>
      <div className={'main'}>
        <News url={'http://localhost:4000/news'}/>
        <MainChess/>
      </div>
    </ToastProvider>
  );
};

export default App;
