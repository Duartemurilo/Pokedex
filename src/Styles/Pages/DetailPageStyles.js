import styled from 'styled-components'

export const DetailPageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 100vh;
  img {
    height: 30vh;
    margin-top: 8vh;
    object-fit: cover;
    width: 20vw;
  }
`
export const DetailLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8vw;
  justify-content: center;
  width: 30%;
`
export const DetailMidlle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
`
export const DetailRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  width: 30%;
  margin-left: 6vw;
`
