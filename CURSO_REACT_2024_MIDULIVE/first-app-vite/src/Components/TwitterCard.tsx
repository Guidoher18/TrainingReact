import './Styles/TwitterCard.css';

export const TwitterCard = ({ children, avatarUrl, account, isFollowing }: { children: string; avatarUrl: string; account: string, isFollowing: boolean }) => {
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
                <button className='article__aside__button'><strong>{isFollowing ? 'Siguiendo' : 'Seguir'}</strong></button>
            </aside>
        </article>
    );
};
