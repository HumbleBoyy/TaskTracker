import Buttons from "../Buttons/Buttons"
import "./heder.css"
import PropTypes from 'prop-types'
const Header = ({title, onAdd, showAdd}) => {
  return (
    <>
      <header className="header">
         <h1 className="title">{title}</h1>
         <Buttons color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'ADD'} onClick={onAdd}/>
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
