import { useState} from 'react';
import useStencilClickHandler from './useStencilClickHandler';

function App() {
  const [count, setCount] = useState(0);

  const clickRef = useStencilClickHandler(() => setCount(count + 1));

  return (
    <div className="App">
        <p>Count is {count}</p>
        <pixo-stencil-button ref={clickRef}>Stencil Button</pixo-stencil-button>
    </div>
  );
}

export default App;
