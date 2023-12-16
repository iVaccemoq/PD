
import './form.scss'

import google from '../../resourses/google.svg';
import arrow from '../../resourses/arrow.svg';

const Form = () => {
    return (
        <div className="form">
            <a href="" className="form__back">
                <img src={arrow} alt="arrow" className="form__arrow" />
                Back
            </a>
            <form action="" className="form__reg-form">
                <h2 className="form__title">Login to your Account</h2>
                <div className="form__sub-title">with your registered Email Address</div>
                <label htmlFor="" className="form__label">Email address*</label>
                <input type="text" className="form__input" placeholder='Enter email address'/>
                <label htmlFor="" className="form__label">Enter password*</label>
                <input type="text" className="form__input" placeholder='Password'/>
                <input type="checkbox" className="form__checkbox" />
                <label htmlFor="" className="form__label">Remember my password</label>
                <button className="form__submit">Login</button>
                <button className="form__log-google">
                    <img src={google} alt="" className="form__google-img" />
                    Login with Google
                </button>
            </form>
        </div>
    )
}

export default Form;