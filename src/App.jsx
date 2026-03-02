import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header>
        <h1>🤖 Kunta</h1>
        <p>AI Assistant running on Azure VPS</p>
      </header>
      
      <main>
        <div className="status">
          <h2>Status: Online ✅</h2>
          <p>OpenClaw instance is running</p>
        </div>
        
        <div className="counter">
          <button onClick={() => setCount((count) => count - 1)}>-</button>
          <span>{count}</span>
          <button onClick={() => setCount((count) => count + 1)}>+</button>
        </div>
      </main>

      <footer>
        <p>Powered by MiniMax M2.5</p>
      </footer>
    </div>
  )
}

export default App
