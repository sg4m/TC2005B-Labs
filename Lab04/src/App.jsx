import './App.css'
import { CharacterExplorer } from './components/CharacterExplorer'
import { LocationBrowser } from './components/LocationBrowser'
import { EpisodeGuide } from './components/EpisodeGuide'

function App() {
  return (
    <>
      <h1>Rick and Morty API</h1>
      <CharacterExplorer />
      <LocationBrowser />
      <EpisodeGuide />
    </>
  )
}

export default App
