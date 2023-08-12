import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appId, appName, imageUrl, category} = appsList

  return (
    <li className="apps-list">
      <div className="app-item">
        <img src={imageUrl} alt={appName} className="app-logo" />
        <p className="app-name">{appName}</p>
      </div>
    </li>
  )
}

export default AppItem
