import Link from 'next/link'

export default function Offer() {



  return (
        <span className="af-view">
          <div className="af-class-body">
            <div className="af-class-main-wrapper">
              <div className="af-class-container w-container">
                <div className="af-class-block">
                  <h1 className="af-class-block-title"><strong className="af-class-bold-text-3">Komerční nabídka</strong><br/></h1>
                  <div className="af-class-form-nabidka-container">
                    <p className="af-class-form-subtitle-cf5">Pokud máte nějaké návrhy, vyplňte prosím níže uvedený formulář a my vás budeme kontaktovat.</p>
                    <div className="af-class-form-block w-form">
                      <form id="email-form" name="email-form" data-name="Email Form" className="af-class-form-cf5">
                        <input type="text" className="af-class-text-field-cf5 w-input" maxLength={256} name="Name" data-name="Name" placeholder="Vaše jméno" id="Name" required / >
                          <input type="email" className="af-class-text-field-cf5 w-input" maxLength={256} name="Email" data-name="Email" placeholder="Váš e-mail" id="Email" required />
                            <textarea placeholder="Zpráva" maxLength={5000} id="Field" name="Field" data-name="Field" required className="af-class-text-field-cf5 af-class-big w-input" defaultValue={""} ></textarea>
                            <input type="submit" defaultValue="SEND" data-wait="Please wait..." className="af-class-submit-button-cf5 w-button" />
                          </form>
                      <div className="af-class-success-message-cf5 w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>

                      <div className="af-class-error-message-cf5 w-form-fail">
                        <div>Oops! Something went wrong while submitting the form. <br/>Please refresh and try again.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
  )}