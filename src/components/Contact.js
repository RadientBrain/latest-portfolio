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
                    <form name="gform" id="gform" className="w-50" target="hidden_iframe" onsubmit="submitted=true;" action="https://docs.google.com/forms/d/e/1FAIpQLSfJEqK0oKRDMFUsBTRobUYWGpLODTQ1X1K6VWoglF-AaJ6AqA/formResponse?" >
                        <div className="row d-flex flex-row flex-wrap">
                            <div className="col input-textbox">
                                <input id="entry.1675495836" name="entry.1675495836" type="text" className="form-control" placeholder="Your Email"/>
                                <textarea id="entry.483319533" name="entry.483319533" className="form-control" aria-label="message-box" placeholder="Type you message here"></textarea>
                                <div className="col">
                                    <div className="btn-submit">
                                        <button id="magic-submit" value="Submit" type="submit" className="btn btn-success float-center">Send  <FontAwesomeIcon icon={faPaperPlane} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div dangerouslySetInnerHTML={{__html:  '<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted) {}"></iframe>'}} />
                </div>
            </div>
        </section>
    )
}

export default Contact
