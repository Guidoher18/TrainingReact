import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './preset.css'
import './index.css'
import { TwitterCard } from './Components/TwitterCard'

const data = [
  {
    avatarUrl: 'https://avatar.iran.liara.run/public/42',
    account: '@guido',
    name: 'Guido',
    isFollowing: true
  },
  {
    avatarUrl: 'https://avatar.iran.liara.run/public/43',
    account: '@jDoe',
    name: 'John Doe',
    isFollowing: false
  },
  {
    avatarUrl: 'https://avatar.iran.liara.run/public/44',
    account: '@AnnZ',
    name: 'Ann Z',
    isFollowing: true
  },
];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h3><strong>A quién seguir</strong></h3>

    { 
      data.map(({avatarUrl, account, name, isFollowing}) => (
        <TwitterCard
          avatarUrl={avatarUrl}
          account={account}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterCard>
      ))
    }
  </StrictMode>,
)
