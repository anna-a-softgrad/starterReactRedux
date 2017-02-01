import React, { PropTypes } from 'react'

let App = ( {children} ) => {

  return (
  	<div>
	  	<h1>App</h1>
	    {children}    	
	</div>	
  )
}

App.propTypes = {
	children: PropTypes.node.isRequired
}

export default App