import castle from '../../assets/image/Castle.png'
import circle from '../../assets/image/Exclude.png'
import pipeman from '../../assets/image/Pipeman.png'
import purple from '../../assets/image/Purple.png'

function Header () {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }
  return (
    <div className='container mx-auto overflow-hidden px-10 pt-8 pb-32 relative'>
      <div className='flex justify-between items-center'>
      <div className='relative'>
        <img src={castle} alt={castle} className='lg:h-40 lg:w-40 md:h-10 md:w-10'/>
        <img src={purple} alt={purple} className=' lg:h-10 lg:w-10 md:h-3 md:w-3'/>
      </div>
    <div className='p-10 text-center'>
    <p className='text-6xl font-ABeeZee mb-8'>The best place to</p>
    <p className='text-6xl font-amatic mb-8'>
    <span className='text-violet-400'>EXPLORE</span>
    <span className=' text-6xl font-ABeeZee'> and </span>
    <span className='text-indigo-500'>DISCOVER</span>
    </p>
    <p className='text-6xl lg:text-6xl font-ABeeZee '>Edinburgh</p>
    </div>
    <div className='relative'>
        <img src={circle} alt={circle} className='lg:h-10 lg:w-10 md:w-5 md:h-5'/>
        <img src={pipeman} alt={pipeman} className='lg:h-40 lg:w-40 md:w-5 md:h-5'/>
    </div>
    </div>
    <div className='flex justify-center pt-16'>
    <button 
    type="button"
    onClick={handleScroll}
    className='text-white bg-violet-400 border-transparency rounded-full px-7 py-4'>GET STARTED
    </button>
    </div>
    </div>
    
  )
}

export default Header;