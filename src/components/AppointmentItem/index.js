/* eslint-disable react/button-has-type */
import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {itemsList, touchImage} = props
  const {id, person, addDate, active} = itemsList

  const clickImage = () => {
    touchImage(id)
  }
  const s = format(new Date(addDate), 'dd MMMM yyyy, EEEE')

  const imageEl = active
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="container">
      <div className="startC">
        <p>{person}</p>
        <button onClick={clickImage} data-testid="star" className="buttt">
          <img src={imageEl} alt="star" className="starIm" />
        </button>
      </div>
      <p>Date {s}</p>
    </li>
  )
}
export default AppointmentItem
