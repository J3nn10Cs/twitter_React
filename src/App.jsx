//componentes PasCal
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){
    //Props
    const format = (userName) => `@${userName}`

    // const formattedUserName = <span>@Jennifer</span>
    return(
        <>
        <section className="App">
        <TwitterFollowCard
            userName="Jennifer Chileno Santisteban"
            name= "J3nn10Cs"
            formatUserName = {format}
            isFollowing
            urlImg="../public/hola1.jpg"
        />
        <TwitterFollowCard
            userName="Marcia Casas Castillo"
            name= "Mcasasc"
            formatUserName = {format}
            isFollowing
            urlImg="../public/hola2.jpg"
        />
        <TwitterFollowCard
            userName="Marcia Casas Castillo"
            name= "Mcasasc"
            formatUserName = {format}
            isFollowing
            urlImg="../public/hola2.jpg"
        />
        <TwitterFollowCard
            userName="Marcia Casas Castillo"
            name= "Mcasasc"
            formatUserName = {format}
            isFollowing
            urlImg="../public/hola2.jpg"
        />
        <TwitterFollowCard
            userName="Marcia Casas Castillo"
            name= "Mcasasc"
            formatUserName = {format}
            isFollowing
            urlImg="../public/hola2.jpg"
        />
        </section>
        </>
        
    )
}