import profile from '../assets/images/profile.jpg'
import profile1 from '../assets/images/man.jpg'
import profile2 from '../assets/images/girl.jpg'
import '../assets/style/Section3.css'
function Section3(){
    return (
        <div className="Section3">
            <div className="Section3-header">
                <h2>Clients</h2>
            </div>
            <div className="Section3-items">
                <div className="Section3-item">
                    <p>I just received the most thoughtful graduation note, created especially for me. It perfectly captured my journey, celebrated my achievements,</p>
                    <div className="Section3-item-profile">
                        <img src={profile}></img>
                        <div className="Section3-item-profile-words">
                            <p>Soumia ouadef</p>
                            <p>Algeirs</p>
                        </div>
                    </div>
                </div>
                <div className="Section3-item">
                    <p>A special graduation note arrived for me today, capturing my experiences and celebrating my hard work perfectly. It is a keepsake I will cherish forever.</p>
                    <div className="Section3-item-profile">
                        <img src={profile1}></img>
                        <div className="Section3-item-profile-words">
                            <p>Anis Boucheoui</p>
                            <p>Batna</p>
                        </div>
                    </div>
                </div>
                <div className="Section3-item">
                    <p>I just received a beautifully crafted graduation note made just for me. It truly reflects my journey and highlights my accomplishments in the most heartfelt way,</p>
                    <div className="Section3-item-profile">
                        <img src={profile2}></img>
                        <div className="Section3-item-profile-words">
                            <p>Fayed Halim</p>
                            <p>Tiaret</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3