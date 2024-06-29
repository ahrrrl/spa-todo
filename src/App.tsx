import './App.css';
import StarsBackground from './components/Background';
import TodoPage from './page/TodoPage';

function App() {
  return (
    <div className='todoPage-container'>
      <StarsBackground />
      <TodoPage />
    </div>
  );
}

export default App;
