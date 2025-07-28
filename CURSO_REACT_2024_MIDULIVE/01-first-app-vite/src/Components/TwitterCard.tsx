import { useState } from 'react';
import './Styles/TwitterCard.css';

export const TwitterCard = ({ children, avatarUrl, account, initialIsFollowing = false }: { children: string; avatarUrl: string, account: string, initialIsFollowing?: boolean }) => {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'article__aside__button is-following' : 'article__aside__button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

    return (
        <article className='twitter-card'>
            <header className='article__header'>
                <img src={avatarUrl} alt="Avatar" className='article__header__img'/>
                <div className='article__header__div'>
                    <p className='article__header__p-name'>
                        <strong>{children}</strong>
                    </p>
                    <p className='article__header__p-account'>
                        {account}
                    </p>
                </div>
            </header>
            <aside className='article__aside'>
                <button className={buttonClassName} onClick={handleClick}><strong>{text}</strong></button>
            </aside>
        </article>
    );
};
