import Buttons from "../Buttons/Buttons"
import "./heder.css"
import PropTypes from 'prop-types'
const Header = ({title}) => {
  
  const onClick = () => {
     alert("Add")
  }

  return (
    <>
      <header className="header">
         <h1 className="title">{title}</h1>
         <Buttons color="green" text="ADD" onClick={onClick}/>
      </header>
    </>
  )
}
Header.defaultProps = {
   title: "Task Tracker",
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Header
