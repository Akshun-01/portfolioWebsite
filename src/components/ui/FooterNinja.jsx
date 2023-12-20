
const FooterNinja = () => {
  document.getElementById('ninja');

  return (
    <div className="w-screen z-10  cursor-pointer fixed left-0 bottom-[-10px] animate-walking-ninja">
        <img id="ninja" src="/assets/ninja.png" alt="" className="h-20 aspect-square hover:animate-spin" />
        {/* <img src="./assets/walkingFeet.gif" alt="" className="h-32 aspect-square" /> */}
    </div>
  )
}

export default FooterNinja;