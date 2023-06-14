import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props

  return (
    <div className="notification">
      <div className="icon">{children[0]}</div>
      <div className="content">
        <h1>{children[1]}</h1>
        <p>{children[2]}</p>
        <GrFormClose />
      </div>
    </div>
  )
}

export default Notification
