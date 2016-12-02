import React from 'react'

let App = (children) => {
  console.log(activeItems)

  return (
  	<div>
	  	<h1>App</h1>
	    {children}
	</div>
  )
}

App.propTypes = {
}

export default App