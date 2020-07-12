import React from 'react'

const createMarkup = source => {
  return { __html: source }
}

export const MarkupComponent = ({ source }) => {
  return <div dangerouslySetInnerHTML={createMarkup(source)} />
}

export default MarkupComponent
