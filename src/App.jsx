import './output.css'
import Navbar from './components/Navbar'
import './my.css'
import Manager from './components/Manager'
import Footer from './components/footer'

function App() {

    return (
        <>
            <div className="absolute inset-0 -z-10  items-center px-1 sm:px-5 pt-0 pb-2 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
                <Navbar/>
                <Manager/>
               <Footer/>

            </div>

        </>
    )
}

export default App
