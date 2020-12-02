import React from 'react';

const Proyects = () => {
    return ( 
        <section className="Projects">
            <h2 className="Proyect__title">Projects:</h2>
            <div className="Projects__examples">
                <div className="Project">
                    <img src="./images/project1.jpg" alt="first project" />
                    <h3 className="Proyect__description"><a href="https://podcast-channel-hello-pale-blue-dot.netlify.app/">Podcast Channel</a></h3>
                </div>
                <div className="Project">
                    <img src="https://dummyimage.com/600x325/696669/fff.png&text=second+project" alt="second project" />
                    <h3 className="Proyect__description"><a href="https://searchgifos.netlify.app/">GIFOS</a></h3>
                </div>
                <div className="Project">
                    <img src="https://dummyimage.com/600x325/696669/fff.png&text=third+project" alt="third project" />
                    <h3 className="Proyect__description"><a href="https://npxdz.csb.app/">Hotel Reservations</a></h3>
                </div>
                <div className="Project">
                    <img src="https://dummyimage.com/600x325/696669/fff.png&text=fourth+project" alt="fourth project" />
                    <h3 className="Proyect__description">Rewards Store</h3>
                </div>
            </div>
        </section>
     );
}
 
export default Proyects;