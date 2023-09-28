import './index.css'

const FaqItem = props => {
  const {item, setShowAnswerId} = props
  const image = item.isShowAnswer
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const alt = item.isShowAnswer ? 'minus' : 'plus'
  return (
    <li className="list-item">
      <div className="question-container">
        <h1 className="question">{item.questionText}</h1>
        <button
          className="show"
          type="button"
          onClick={() => setShowAnswerId(item.id)}
        >
          <img src={image} alt={alt} className="icon" />
        </button>
      </div>
      {item.isShowAnswer && (
        <div className="answer-container">
          <p className="answer">{item.answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
