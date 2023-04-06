// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, clickAppItem, isActive} = props
  const {tabId, displayText} = tabDetails
  console.log(isActive)

  const activebtn = isActive ? 'active-btn' : ''

  const onClickAppItem = () => {
    clickAppItem(tabId)
  }
  return (
    <li>
      <button
        onClick={onClickAppItem}
        className={`tab-btn ${activebtn}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
