import React from 'react'
impout {useRouteError}  from 'react-router-dom'

const Error = () => {

    const err=useRouteError();
  return (
    <div>
        
<h2>{err.status+":"+err.statusMessage}</h2>

    </div>
  )
}

export default Error