export const goToDetailPage = (history,id) => {
  history.push(`/Pokemon/${id}`)
} 

export const goToPokedex = (history) => {
  history.push('/pokedex')
}

export const goToHomePage = (history) => {
  history.push(`/`)
} 