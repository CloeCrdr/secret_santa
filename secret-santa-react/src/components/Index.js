import React, { Component } from 'react';
import Session from 'react-session-api'

const Index = () => {
    // console.log(Session.get('connectUser'));
    return (
        <div>
            <h1>Bienvenue sur l'application <br/>Secret Santa !</h1>

            <div className='textDescription'>
                <p>
                    <em>Secret Santa, qu'est-ce que c'est ?</em> C'est une tradition de Noël lors de laquelle les membres d'un groupe s'offrent au hasard des cadeaux. 
                    <br/>
                    On fait un tirage au sort qui décide de qui est le Père Noël Secret de qui. Et comme c'est secret, le but c'est de garder pour soi le nom de la personne à qui on fait un cadeau.
                    <br/>
                    <br/>
                    <span>T'as tout compris ? Super. </span>
                    <br/>
                    Alors tu peux commencer l'aventure avec nous. 
                    <br/>Connecte-toi ou inscris-toi si ce n'est pas déjà fait et tu pourras accéder à tous les groupes créés pour l'occasion. 
                    <br/>
                    Tu verras, y a pas plus <u>simple</u> !
                </p>
            </div>
        </div>
    )
}


export default Index;