import React from 'react'
import {connect} from 'react-redux'
import Audio from '../../Sounds'

const AudioPlayer = ({sound}) => {
  const random = Math.floor(Math.random() * 5)
  const source = sound ? Audio[sound][random] : null
  console.log(source)
  return (
    <audio controls src={source} autoPlay hidden/>
  );
}

const mapStateToProps = state => ({
  sound: state.conversation.sound
})

export default connect(mapStateToProps)(AudioPlayer);