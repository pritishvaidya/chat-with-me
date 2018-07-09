import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {Colors} from "../../Theme/Global";

class Answers extends Component {
  render () {
    return (
      <Wrapper>

      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Answers)

const Wrapper = styled.div`
  background-color: ${Colors.Background}
  width: ${window.innerWidth}px
  height: ${window.innerHeight * 0.15}px
`
