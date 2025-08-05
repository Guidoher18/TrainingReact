import { getFirstThreeWord } from '../utils/common';
import { useCatFact } from '../hooks/useCatFact';
import { useCatImg } from '../hooks/useCatImg';
import './Styles/App.css'

function App() {
  const { fact, refreshFact } = useCatFact();
  const { imgUrl } = useCatImg({ fact });

  return (
    <>
      <main>
        <h1>App de Gatitos</h1>
        <button className='main__button' onClick={refreshFact}>Get new fact!</button>
        <br/>
        {imgUrl && <img src={imgUrl} alt="Gatito" width='300' height='300' />}
        <p>{fact}</p>
        <p><i><u>Tres primeras palabras</u>: </i>{getFirstThreeWord(fact)}</p>
      </main>
    </>
  )
}

export default App
