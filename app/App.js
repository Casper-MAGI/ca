import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Start from '@page/Start'
import Clothes from '@page/Clothes'
import Share from '@page/Share'

import '@/flexible'
import '@style/index.styl'

render(
  <Router>
    <div className='full-size'>
      <Route exact path="/" component={Start} />
      <Route path='/clothes' component={Clothes} />
      <Route path='/share' component={Share} />
    </div>
  </Router>,
  document.getElementById('root')
)
