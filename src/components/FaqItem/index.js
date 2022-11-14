// Write your code here.
/* eslint-disable prettier/prettier */

import {Component} from 'react'

class FaqItem extends Component {

  state = {    
    isTextShown: false,
  }

  onClicking = ()=>{
        this.setState(prevState=>({isTextShown:!prevState.isTextShown}))
    }

    render(){
        const {isTextShown}=this.state
        const {faqDetails} = this.props
    const {questionText,answerText} = faqDetails
        const url = isTextShown?"https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png":"https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
        const altText = isTextShown?"minus":"plus"
        return(
            <>
<li>            
            <h1>{questionText}</h1>
            <button type="button" onClick={this.onClicking}>
                <img src={url} alt={altText}/>
            </button>
            {isTextShown&&(<>
            <hr/>
            <p>{answerText}</p>
            </>)}
    </li>
    </>)
    }
}
export default FaqItem