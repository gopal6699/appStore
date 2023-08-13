import './index.css'

const TabItem = props => {
  const {tabsList, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabsList
  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        className={tabBtnClassName}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
