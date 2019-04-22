import styled from 'styled-components'

const Orb = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;

  * {
    text-decoration: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  &::after {
    content: '';

    display: block;
    margin: -4px 0 0 -4px;
    width: 8px;
    height: 8px;

    position: absolute;
    left: 50%;
    top: -12px;
    background: #005882 radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.6) 10%, transparent 60%);
    box-shadow: 0 2px 10px #005882;
    opacity: 0.6;
    border-radius: 50%;
    pointer-events: none;
    transition: 0.3s;
    transform: scale(0.5);
    opacity: 0;
  }

  &:hover::after {
    opacity: 0.8;
    transform: scale(1);
  }
`

export default Orb
