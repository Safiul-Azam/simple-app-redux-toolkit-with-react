import './App.css';
import CounterView from './features/counter/CounterView';
import MealDb from './features/mealDb/MealDb';
function App() {
  return (
    <div className="App">
      <CounterView></CounterView>
      <MealDb></MealDb>
    </div>
  );
}

export default App;
