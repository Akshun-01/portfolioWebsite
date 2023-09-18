
const FooterNinja = () => {
  document.getElementById('ninja');

  return (
    <div className="w-screen z-10  cursor-pointer fixed bottom-0 left-0">
        <img id="ninja" src="./assets/ninja.png" alt="" className="h-20 aspect-square" />
    </div>
  )
}

export default FooterNinja;