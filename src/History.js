import React from 'react';
import Timeline from './components/Timeline';
import Navbar from './components/Navbar';
import Rulescard from './components/Rulescard';
import BroomTitle from './components/BroomTitle';
import YoutubeHistory from './components/YoutubeHistory';

const History = () => {
  return (
    <>
      <Navbar/>
      <Timeline/>
      <BroomTitle
        title="Démonstration du Quidditch"
      />
      <section className='history-youtube-section'>
        <YoutubeHistory
          src='https://www.youtube.com/embed/C0cfigo8iKM'
        />
      </section>
      <BroomTitle
        title="Les règles du Quidditch"
      />
      <section className='history-rulescard-section'>
        <div className='history-rulescard-section-group1'>
          <Rulescard
            img="./rules/green-headband.png"
            description="Un·e gardien·ne par équipe porte un bandeau et mène le jeu du souafle"
          />
          <Rulescard
            img="./rules/black-headband.png"
            description="Deux batteur·euses par équipe lancent des cognards sur leurs adversaires"
          />
          <Rulescard
            img="./rules/yellow-headband.png"
            description="Un·e attrapeur·se dans chaque équipe est chargé·e d'attraper le vif d'or à partir de 18 minutes de jeu"
          />
          <Rulescard
            img="./rules/white-headband.png"
            description="Trois poursuiveur·euses dans chaque équipe s'occupent de marquer des buts avec le souafle"
          />
        </div>

        <section className='history-section-middle'>
          <div className='history-bubble'>
            <p>Tous les joueur·euses sur le terrain sont soumis·es à la même règle des genres, ou règles des 4 maximum :<br/>Pas plus de 4 personnes du même genre par équipe en même temps sur le terrain. Cette règle est primordiale pour assurer que le Quidditch reste mixte et inclusif</p>
          </div>
          <a href='https://drive.google.com/file/d/1BJGoErZ94y9bGcMMcZDv8GdHXP8vHwH0/view' target={'blank'}>
            <img className='history-img-harry' src="./rules/harry-quidditch.png" alt="Harry Potter sur son balai" />
          </a>
        </section>

        <div className='history-rulescard-section-group2'>
          <Rulescard
            img="./rules/souafle.png"
            description="Le souafle est une balle de volley utilisée pour marquer des buts à travers les anneaux adverses. Chaque but marqué vaut 10 points"
          />
          <Rulescard
            img="./rules/vif.png"
            description="Le Vif d'Or est composé d'une balle de tennis dans une chaussette accrochée au dos d'un·e arbitre neutre. Il vaut 30 points pour l'équipe qui l'attrape et sa capture met fin au match"
          />
          <Rulescard
            img="./rules/cognard.png"
            description="Trois cognards servent à éliminer temporairement les joueur·ses. Toute personne touchée par un cognard doit lâcher sa balle et retourner toucher l'un de ses anneaux"
          />
        </div>
      </section>
    </>
  );
};

export default History;
