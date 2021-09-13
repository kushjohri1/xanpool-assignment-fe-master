import { useParams, useLocation, useHistory } from 'react-router'
import qs from 'qs'

export function useRoutes() {
  const params = useParams()
  const location = useLocation()
  const history = useHistory()
  const query = qs.parse(location.search, { ignoreQueryPrefix: true })

  return {
    params,
    location,
    history,
    query,
  }
}

export const randomBgColor = () => {
  var x = Math.floor(Math.random() * 256)
  var y = Math.floor(Math.random() * 256)
  var z = Math.floor(Math.random() * 256)
  var bgColor = "rgb(" + x + "," + y + "," + z + ")"

  return bgColor
}
