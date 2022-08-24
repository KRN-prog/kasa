import logoDark from '../assets/img/kasa_dark.png'

function Footer() {
    return(
        <footer className='footer'>
            <img src={logoDark} alt="logo kasa dark" className='footer__img' />
            <div>
                <span>© 2020 Kasa. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer