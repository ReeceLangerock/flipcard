import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
function Card(props) {
  return (
    <CardContainer>
      Card
    </CardContainer>
  )
}

Card.propTypes = {

}

export default Card

const CardContainer = styled.div`
  background: #d9edfe;
  padding: 10px;
  border: 2px solid #33A1FD;
  color: #2176FF;
  border-radius: 5px;
  margin: 20px auto;
  width: 80%;
  min-height: 200px;
`;


CardContainer.displayName = 'CardContainer'