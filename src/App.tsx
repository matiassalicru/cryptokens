// Components
import { TokenRow } from './components/TokenRow/TokenRow'
import { Button } from './components/Button/Button'

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TokenRow />
        <Button text='Update' onClick={() => console.log('update')}/>
      </header>
    </div>
  );
}
