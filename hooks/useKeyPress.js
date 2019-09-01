export default (targetKey, action) => {
  const downHandler = ({ key }) => {
    if (key === targetKey) {
      action()
    }
  }
  window.addEventListener('keydown', downHandler)
}
