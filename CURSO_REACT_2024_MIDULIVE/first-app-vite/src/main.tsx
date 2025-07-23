import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './preset.css'
import './index.css'
import { TwitterCard } from './Components/TwitterCard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h3><strong>A quién seguir</strong></h3>
    <TwitterCard
      avatarUrl='https://avatar.iran.liara.run/public/42'
      account='@guidoher'
      isFollowing
    >
      Guido C
    </TwitterCard>

    <TwitterCard
      avatarUrl='https://avatar.iran.liara.run/public/42'
      account='@alkdjlajldslajsldlajsdjl'
      isFollowing={false}
    >
      lakdjslajdjalsdjalkdjlakdjlakdjlaskdj
    </TwitterCard>
  </StrictMode>,
)
