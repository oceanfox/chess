import './App.css';
import ChessBoard from './components/ChessBoard'
import WhiteKing from './sprites/WhiteKing'

function App() {
  return (
    <div className="container">
        <ChessBoard />
     <div className='svg'>
         <WhiteKing />
     </div>
    </div>
  );
}

export default App;
