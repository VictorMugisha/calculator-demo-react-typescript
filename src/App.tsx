import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { ScreenContext } from './contexts/ScreenContext'

function App() {
  const [screenValue, setScreenValue] = useState<number>(0)

  const screenContextValue = {
    screenValue,
    setScreenValue
  }

  return (
    <main className="w-full flex flex-col md:max-w-[25rem] md:mx-auto mt-6">
      <ScreenContext.Provider value={screenContextValue}>
        <Layout />
      </ScreenContext.Provider>
    </main>
  )
}

export default App
