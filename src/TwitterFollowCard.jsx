import { useState } from "react"
export function TwitterFollowCard({formatUserName,userName, name, urlImg}){
    //estado inicial
    const [isFollowing,setFollowing] = useState(false)
    //valor inicial del estado
    // const isFollowing = state[0]
    // //cambiar
    // const setFollowing = state[1]

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-follorCard-button is-following' : 'tw-follorCard-button'

    //al hacer click
    const handleClick = () => {
        setFollowing(!isFollowing)
    }

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                src={urlImg} 
                alt="avatar" />
                <div className='tw-follorCard-info'>
                    <strong>{name}</strong>
                    <span>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}