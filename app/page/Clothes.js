import React, { Component } from 'react'
import PropTypes from 'prop-types'
import qs from 'qs'

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
  state = {
    carIndex: 0,
    backCarIndex: 0,
    headIndex: 0,
    clotheIndex: 0,
    selecterType: 'head',
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
  changeType = type => () => {
    this.setState({
      selecterType: type
    })
  }
  renderTypeSelecter = () => {
    const { selecterType } = this.state
    return <div className="type-selecter-list">
      {
        typeList.map(item =>
          <div
            key={item.label}
            onClick={this.changeType(item.type)}
            className={item.type === selecterType ? "selecter-button-active" : "selecter-button"}
          >{item.label}</div>
        )
      }
    </div>
  }
  selectItem = key => value => () => {
    this.setState({
      [key]: value
    })
  }
  renderItemSelecter = () => {
    let list = []
    const { selecterType } =this.state
    if (selecterType === 'car') {
      list = carList.map((item, index) => 
        <div
          key={item.id}
          onClick={this.selectItem('carIndex')(index)}
          style={{
            background: `url(${item.imgUri}) no-repeat center center / cover`
          }}
          className="selecter-button"
        ></div>
      )
    }
    if (selecterType === 'head') {
      list = headList.map((item, index) => 
        <div
          key={item.id}
          onClick={this.selectItem('headIndex')(index)}
          style={{
            background: `url(${item.imgUri}) no-repeat center center / cover`
          }}
          className="selecter-button"
        ></div>
      )
    }
    if (selecterType === 'clothe') {
      list = clotheList.map((item, index) => 
        <div
          key={item.id}
          onClick={this.selectItem("clotheIndex")(index)}
          style={{
            background: `url(${item.imgUri}) no-repeat center center / cover`
          }}
          className="selecter-button"
        ></div>
      )
    }
    if (selecterType === 'backCar') {
      list = backCarList.map((item, index) => 
        <div
          key={item.id}
          onClick={this.selectItem('backCarIndex')(index)}
          style={{
            background: `url(${item.imgUri}) no-repeat center center / cover`
          }}
          className="selecter-button"
        ></div>
      )
    }
    return <div className="item-selecter-container">
      <div className="item-selecter-list">
        {list}
      </div>
    </div>
  }
  jump = () => {
    const {
      carIndex,
      backCarIndex,
      headIndex,
      clotheIndex,
    } = this.state
    this.context.router.history.push('/share?' + qs.stringify({
      carIndex,
      backCarIndex,
      headIndex,
      clotheIndex,
    }))
  }
  render() {
    return <div className='clothes-page'>
      <div className="colthes-frame">
        <div className="frame-container">
          { this.renderBackCar() }
          { this.renderCar() }
          { this.renderHead() }
          { this.renderClothe() }
        </div>
        { this.renderTypeSelecter() }
        { this.renderItemSelecter() }
      </div>
      <div
        onClick={this.jump}
        className="start-page-button"
      ></div>
    </div>
  }
}