import './App.css';
import config from '../../config';
import Card from '../Card/Card';

function App() {
  
  return (
    <main className='main'>
        <h1 className='main__header'>Ты сегодня покормил кота?</h1>
        <ul className='main__list'>
            {config.map((item) => (
              <Card
                key={item.id}
                {...item} 
              />
            ))}
        </ul>
    </main>
  );
}

export default App;
