import './AfterInstall.css'

function AfterInstall() {
  return (
    <>
      <h2 className="header">Edit Website Extension installed!</h2>
      <div className='descr'>Click pencil (1) to start edit</div>
      <div className='descr'>Try to edit this sample text (2)</div>
      <div className='descr'>Click pencil (1) to stop editing</div>
      <img src="./after_install.png" alt="" />
    </>
  )
}

export default AfterInstall