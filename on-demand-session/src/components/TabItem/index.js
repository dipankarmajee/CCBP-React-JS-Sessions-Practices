import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  render() {
    const {tabDetails} = this.props
    const {tabId, displayText} = tabDetails
    const onChangeTab = () => {
      ;({tab: tabId})
    }
    return (
      <li className="tab-item-container ">
        <button type="button" className="tab-btn" onClick={onChangeTab}>
          {displayText}
        </button>
      </li>
    )
  }
}

// const TabItem = props => {
//   const {tabDetails} = props
//   const {displayText} = tabDetails

//   return (
//     <li className="tab-item-container ">
//       <button type="button" className="tab-btn">
//         {displayText}
//       </button>
//     </li>
//   )
// }

export default TabItem
