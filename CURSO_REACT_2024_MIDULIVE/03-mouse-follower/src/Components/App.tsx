import { useEffect, useState } from 'react';
import './Styles/App.css'

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleMove = (event: any) => {
      const { clientX, clientY } = event;

      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) { 
      window.addEventListener('pointermove', handleMove);
    }

    return () => {
      window.removeEventListener('pointermove', handleMove);
    }
  }, [enabled]);

  return (
    <main>
      <div className={ enabled ? 'esfera' : '' } style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}></div>
      <h3>Proyecto 3</h3>
      <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Desactivar seguir puntero' : 'Activar seguir puntero'}</button>
    </main>
  )
}

export default App
