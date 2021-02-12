import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background: white;
  border: solid 3px transparent;
  border-radius: 6px;
  text-decoration: none;
  padding: 16px;
  transition: all ease 0.35s;
`
export const CardLink = styled(Link)`
  color: #161616;
  text-decoration: none;
  &:hover {
    color: #ff3f3f;
    border-color: #ff7474;
  }
`

export const CardName = styled.h3`
  margin-top: 16px;
  text-align: center;
  font-size: 1.3rem;
`
export const CardActions = styled.div`
  display: flex;
  width: 100%;
  font-size: 2rem;
  margin-bottom: 5px;
`
