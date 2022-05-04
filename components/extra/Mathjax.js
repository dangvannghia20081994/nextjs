import React from 'react'
import { MathJax, MathJaxContext } from "better-react-mathjax";
const Mathjax = ({children}) => {
  return (
    <MathJax>
      <div dangerouslySetInnerHTML={{ __html: children }}></div>
    </MathJax>
  )
}

export default Mathjax