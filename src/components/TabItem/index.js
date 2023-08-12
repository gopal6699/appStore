import './index.css'

const TabItem = props => {
  const {tabsList, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabsList
  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="app-item-list">
      <button
        type="button"
        className={`app-category-button ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
