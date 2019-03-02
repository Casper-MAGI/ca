import React, { Component } from 'react'
import qs from 'qs'
import PropTypes from 'prop-types'

const carList = [
  { name: '1', id: '1', imgUri: require('@/image/car-1@3x.png')},
  { name: '2', id: '2', imgUri: require('@/image/car-2@3x.png')}
]

const backCarList = [
  { name: '1', id: '1', imgUri: require('@/image/back-car-1@3x.png')},
  { name: '2', id: '2', imgUri: require('@/image/back-car-2@3x.png')},
  { name: '3', id: '3', imgUri: require('@/image/back-car-3@3x.png')}
]

const headList = [
  { name: '1', id: '1', imgUri: require('@/image/男头1@3x.png')},
  { name: '2', id: '2', imgUri: require('@/image/男头2@3x.png')},
  { name: '3', id: '3', imgUri: require('@/image/女头1@3x.png')},
  { name: '4', id: '4', imgUri: require('@/image/女头2@3x.png')}
]

const clotheList = [
  { name: '1', id: '1', imgUri: require('@/image/clothe-1@3x.png')},
  { name: '2', id: '2', imgUri: require('@/image/clothe-2@3x.png')}
]

const typeList = [
  { type: 'head', label: '发型' },
  { type: 'clothe', label: '服装' },
  { type: 'backCar', label: '配饰' },
  { type: 'car', label: '汽车' },
]

export default class Start extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  constructor(props) {
      super(props)
      const queryString = props.location.search.replace('?', '')
      const query = qs.parse(queryString)
      this.state = {
        carIndex: 0,
        backCarIndex: 0,
        headIndex: 0,
        clotheIndex: 0,
        ...query,
      }
  }
  renderCar = () => {
    const { carIndex } = this.state
    return <div
      className="card"
      style={{
        background: `url(${carList[carIndex].imgUri}) no-repeat center center / cover`
      }}
    >
    </div>
  }
  renderBackCar = () => {
    const { backCarIndex } = this.state
    return <div
      className="card"
      style={{
        background: `url(${backCarList[backCarIndex].imgUri}) no-repeat center center / cover`
      }}
    >
    </div>
  }
  renderHead = () => {
    const { headIndex } = this.state
    return <div
      className="card"
      style={{
        background: `url(${headList[headIndex].imgUri}) no-repeat center center / cover`
      }}
    >
    </div>
  }
  renderClothe = () => {
    const { clotheIndex } = this.state
    return <div
      className="card"
      style={{
        background: `url(${clotheList[clotheIndex].imgUri}) no-repeat center center / cover`
      }}
    >
    </div>
  }
  goBack = () => {
      this.props.history.goBack()
  }
  render() {
    return <div className='share-page'>
      <div className="share-frame">
        <div className="logo"></div>
        <div className="frame-container">
          { this.renderBackCar() }
          { this.renderCar() }
          { this.renderHead() }
          { this.renderClothe() }
          <div className="type-label">猫系女神</div>
          <div className="type-desc">猫系女神， 猫系女神，猫系女神，猫系女神</div>
        </div>
      </div>
      <div className="button-line">
        <div className="prev" onClick={this.goBack}></div>
        <div className="save"></div>
      </div>
    </div>
  }
}