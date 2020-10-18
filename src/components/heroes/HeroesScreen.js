import React,{useMemo} from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../selectors/getHeroesById';

export const HeroesScreen = ({history}) => {
    
    const {heroeId} = useParams();
    const hero = useMemo(() => getHeroesById(heroeId),[heroeId])
   // const hero= getHeroesById(heroeId)

    if (!hero) { 
        return <Redirect to="/" /> ;
    }

    const {
        id,
        superhero ,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero ; 
    
    const handleReturn = () => {
        if (history.length <=2) {
            history.push('/');
        }else{
        history.goBack()
        }
    }
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                src={`../assets/heroes/${heroeId}.jpg`}
                alt={superhero}
                className="img-thumbnail"
                />
            </div>
            <div className="col-8">
                <h3>{superhero} </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter Ego:</b> {alter_ego} </li>
                    <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
                    <li className="list-group-item"><b>First Appearence:</b> {first_appearance }</li>
                </ul>

                <h5> Characters </h5>
                <p>{characters} </p>
                <button 
                className="btn btn-outline-info"
                onClick={handleReturn}>
                    Return
                </button>
            </div>
        </div>
    )
}
