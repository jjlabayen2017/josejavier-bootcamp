import './App.css';
import Mensaje from './Mensaje'

const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='En un curso' />
    </div>
  )
}

export default App;
