import Homepage from '../components/Homepage'

import Fonts from '../general/Fonts'

class Index extends React.Component {
  componentDidMount () {
    Fonts()
  }

  render () {
    return <Homepage />
  }
}

export default Index