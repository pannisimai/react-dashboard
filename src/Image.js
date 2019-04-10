import React from 'react'
import "./Image.css"
export default class Image extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      url: [],
    };
  }

  componentDidMount() {
    fetch('https://source.unsplash.com/collection/190727/1600x900')
    .then((response)=> { this.setState({ url: response.url })})

  }

  render() {
    return (
        <img src={this.state.url}></img>
        
    )
  }
}

