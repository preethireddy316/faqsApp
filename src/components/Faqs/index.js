import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props
  return (
    <>
      <h1>FAQs</h1>
      <ul>
        {faqsList.map(each => (
          <FaqItem key={each.id} faqDetails={each} />
        ))}
      </ul>
    </>
  )
}
export default Faqs
