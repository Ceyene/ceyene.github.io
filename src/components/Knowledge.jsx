import React from 'react';

const Knowledge = () => {
    return ( 
        <section className="Knowledge">
            <h2 className="Knowledge__title">Tecnologies learned:</h2>
            <div className="Knowledge__container">
                <div className="Knowledge__tech"><i class="fab fa-html5"></i><h3 className="description">HTML5</h3></div>
                <div className="Knowledge__tech"><i class="fab fa-css3-alt"></i><h3 className="description">CSS3</h3></div>
                <div className="Knowledge__tech"><i class="fab fa-js"></i><h3 className="description">Javascript</h3></div>
                <div className="Knowledge__tech"><i class="fas fa-code-branch"></i><h3 className="description">Git / gitHub</h3></div>
                <div className="Knowledge__tech"><i class="fas fa-universal-access"></i><h3 className="description">Accesibility</h3></div>
                <div className="Knowledge__tech"><i class="fab fa-react"></i><h3 className="description">React</h3></div>
            </div>
        </section>
     );
}
 
export default Knowledge;