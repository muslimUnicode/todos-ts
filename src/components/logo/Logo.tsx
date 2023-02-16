import "./Logo.css"
import logo from "../../assets/logo.svg"

const Logo = () => {
    return(
        <div className="logo">
            <div className="icon"><img src={logo} alt="" /></div>
            <div className="to">to</div>
            <div className="do">do</div>
            <div className="by">by</div>
            <div className="unicode">unicode</div>
        </div>
    )
}

export default Logo