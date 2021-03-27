import React from 'react'
import hacking from '../hacking1.jpg'
import alien_mars from '../alien-mars.jpg'
import magic_castle from '../magic-castle.jpg'

function Extras() {
    return (
        <section id='extras_' className="extras-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <b><h1 className="extras-title">Extra Things I do</h1></b>
                        <p className="extras-para">
                            Apart from my regular studies I try the below mentioned things in my liesure time...
                        </p>
                    </div>
                </div>

            

                <div className="card-deck">
                    <div className="card">
                    <div className="embed-responsive embed-responsive-16by9">
                        <img className="card-img-top embed-responsive-item" src={hacking} alt="hacking-card"/>
                    </div>
                        <div className="card-body">
                        <h5 className="card-title extras-card-title">Ethical Hacking</h5><hr/>
                        <p className="card-text extras-para">In my liesure time I sometimes try to do <b>Pentesting</b> and I have fair knowledge of Cyber Security as well.</p>
                        </div>
                    </div>

                    <div className="card">
                    <div className="embed-responsive embed-responsive-16by9">
                        <img className="card-img-top embed-responsive-item" src={alien_mars} alt="alien-card"/>
                    </div>
                        <div className="card-body">
                        <h5 className="card-title extras-card-title">Alien and Classified Stuff</h5><hr/>
                        <p className="card-text extras-para">I love to explore about the interdimensional and extraterestial bio-living creatures and I also love to explore the secret classified files which have been now declassified by various secret organisations</p>
                        </div>
                    </div>

                    <div className="card">
                    <div className="embed-responsive embed-responsive-16by9">
                        <img className="card-img-top embed-responsive-item" src={magic_castle} alt="magic-castle card"/>
                    </div>
                        <div className="card-body">
                        <h5 className="card-title extras-card-title">Paranormal Wellbeings</h5><hr/>
                        <p className="card-text extras-para">I also do have interests in Paranormal incidents and am fond of the horror genre because it is one of the things that Science can't explain till now</p>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}

export default Extras
