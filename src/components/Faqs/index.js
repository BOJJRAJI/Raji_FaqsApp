import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {listData: []}

  componentDidMount() {
    const {faqsList} = this.props

    const listItem = faqsList.map(item => ({...item, isShowAnswer: false}))

    this.setState({listData: listItem})
  }

  setShowAnswerId = id => {
    this.setState(prevState => ({
      listData: prevState.listData.map(item => {
        if (item.id === id) {
          return {...item, isShowAnswer: !item.isShowAnswer}
        }
        return item
      }),
    }))
  }

  render() {
    const {listData} = this.state

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="heading">FAQs</h1>
          <ul className="faqs-container">
            {listData.map(item => (
              <FaqItem
                item={item}
                key={item.id}
                setShowAnswerId={this.setShowAnswerId}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
