import React from 'react'

export const SearchResult = ({result}) => {
  return (
    <div onClick={(e) => alert(`you clicked on ${result.name}`)}>{result.name}</div>
  )
}
