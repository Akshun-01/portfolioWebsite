
const FooterNinja = () => {
  document.getElementById('ninja');

  return (
    <div className="w-screen z-10  cursor-pointer fixed left-0 bottom-0 animate-walking-ninja">
        {/* <img id="ninja" src="./assets/ninja.png" alt="" className="h-20 aspect-square" /> */}
        <img src="./assets/walkingNinja.gif" alt="" className="h-20 aspect-square" />
    </div>
  )
}

export default FooterNinja;