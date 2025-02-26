import Excel_logo from "../assets/images/exel.jpg"
import word_logo from "../assets/images/word.jpg"
import power_logo from "../assets/images/power.jpg"
import canva_logo from "../assets/images/canva.jpg"
import photoshop_logo from "../assets/images/ph.jpg"
import figma_logo from "../assets/images/figma.jpg"
import '../assets/style/Section1.css'

function Section1(){
    return (
        <div className="Section1">
            <div className="Section1-header">
                <h2>Skills</h2>
            </div>
            <div className="Section1-items">
                <div className="Section1-item">
                    <img src={Excel_logo}></img>
                    <h3>Excel</h3>
                    <p>Excel is a powerful spreadsheet tool that helps in organizing data, performing calculations, and creating visual representations of information.</p>
                </div>
                <div className="Section1-item">
                    <img src={word_logo}></img>
                    <h3>Word</h3>
                    <p>Microsoft Word enables users to create, format, and edit documents efficiently, making professional reports and documents easy to produce.</p>
                </div>
                <div className="Section1-item">
                    <img src={power_logo}></img>
                    <h3>PowerPoint</h3>
                    <p>PowerPoint is an essential tool for creating engaging presentations with animations, graphics, and multimedia elements.</p>
                </div>
                <div className="Section1-item">
                    <img src={canva_logo}></img>
                    <h3>Canva</h3>
                    <p>Canva is a user-friendly design platform that allows users to create stunning graphics, posters, and social media content effortlessly.</p>
                </div>
                <div className="Section1-item">
                    <img src={photoshop_logo}></img>
                    <h3>Photoshop</h3>
                    <p>Adobe Photoshop is a professional photo editing and graphic design tool used for image manipulation and digital artwork creation.</p>
                </div>
                <div className="Section1-item">
                    <img src={figma_logo}></img>
                    <h3>Figma</h3>
                    <p>Figma is a collaborative interface design tool that allows designers to create, prototype, and share user interface designs seamlessly.</p>
                </div>
            </div>
        </div>
    )
}

export default Section1
