import './AfterInstall.css'

function AfterInstall() {
  return (
    <>
      <h2 className="header">Url Opener installed!</h2>
      <div className='descr'>Click the puzzle piece (1) in the top right of your browser.</div>
      <div className='descr'>Then, click the little pin (2) next to the extension:</div>
      <img className='img' src="./pin.png" alt="" />
      <div className='descr'>Activate the extension (3) to open links:</div>
      <img className='img' src="./run.png" alt="" />
    </>
  )
}

export default AfterInstall