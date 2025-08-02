import React from 'react'

export const GridRepo = ({index, nameRepo, lenguage, visibility, html_url}) => {
  return (
    <div className='gridRepo'>
        <div>
            <a key={index} href={html_url}> {nameRepo} </a>
            <h5> {lenguage} </h5>
        </div>

        <div>
            <span className='visivility'>{visibility}</span>
        </div>
    </div>
  )
}
