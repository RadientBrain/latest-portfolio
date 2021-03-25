import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <section id='contact_' className="contact-area">
            <div className="container-fluid contact">
                <div className="row">
                    <div className="col-12 text-center contact-title">
                        <h4><b>Contact Me</b></h4>
                        <p className="contact-para">Wanna talk with me? Just drop a message!</p>
                    </div>                    
                </div>

                <div className="d-sm-flex justify-content-center input-fields text-center">
                    <form className="w-50">
                        <div className="row d-flex flex-row flex-wrap">
                            <div className="col input-textbox">
                                <input type="text" className="form-control" id="txtmail" placeholder="Your Email"/>
                                <textarea class="form-control" aria-label="message-box" placeholder="Type you message here"></textarea>
                                <div className="col">
                                    <div className="btn-submit">
                                        <button type="submit" className="btn btn-success float-center">Send  <FontAwesomeIcon icon={faPaperPlane} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
