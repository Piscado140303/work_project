import Paper1 from "../assets/images/scrn1.png"
import Paper2 from "../assets/images/scrn2.png"
import Paper3 from "../assets/images/scrn3.png"
import Paper4 from "../assets/images/scrn4.png"
import Paper5 from "../assets/images/scrn5.png"
import '../assets/style/Section2.css'
function Section2(){
    return (
        <div className='Section2'>
            <div className='Section2-header'>
                <h2>My Latest Work</h2>
            </div>
            <div className='Section2-items'>
                <div className='Section2-item'>
                    <img src={Paper1}></img>
                    <h3>Graduation note</h3>
                    <p>Mark:18/20</p>
                </div>
                <div className='Section2-item'>
                    <img src={Paper2}></img>
                    <h3>Graduation note</h3>
                    <p>Mark:17/20</p>
                </div>
                <div className='Section2-item'>
                    <img src={Paper3}></img>
                    <h3>Graduation note</h3>
                    <p>Mark:17/20</p>
                </div>
                <div className='Section2-item'>
                    <img src={Paper4}></img>
                    <h3>Graduation note</h3>
                    <p>Mark:18/20</p>
                </div>
                <div className='Section2-item'>
                    <img src={Paper5}></img>
                    <h3>Graduation note</h3>
                    <p>Mark:18/20</p>
                </div>
            </div>
        </div>
    )
}

export default Section2