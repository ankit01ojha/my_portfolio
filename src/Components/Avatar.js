import avatar_img from '../avatar-color-bg.jpg';
import Typed from 'react-typed';


const Avatar = () => {

    const sub = "<Front-end Developer/> <Computer Vision/> <NLP/> "
    return(
        <div className = "Avatar-div" >
            <img className = "Avatar-img" src={avatar_img}/>
            <h1>Ankit Raj Ojha</h1>
            <h3>
            {/* <Typed
                strings={[
                    'From web development to Deep Learning',
                    // 'Converting imagination into code'
                ]}
                    typeSpeed={70}
                    backSpeed={50}
                    // attr="placeholder"
                    loop >
                    
                </Typed> 
                */}
            {sub}
            </h3>
        </div>
    )
}
    

export default Avatar;