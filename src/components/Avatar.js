import styled from 'styled-components'

const Avatar = styled.img.attrs({ draggable: false })`
  flex: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`

export default Avatar
