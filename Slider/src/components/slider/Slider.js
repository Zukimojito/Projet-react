import React, {useState} from 'react'
import './Slider.css'
import dataSlider from './dataSlider'
import BtnSlider from './BtnSlider';


export default function Silder() {

    const [SlideAnim, setSlideAnim] = useState({
        index : 1,
        inProgress : false
    });

    const nextSlide = () => {
        if(SlideAnim.index != dataSlider.length && !SlideAnim.inProgress){
            setSlideAnim({index : SlideAnim.index + 1, inProgress : true});
            setTimeout(() => {
                setSlideAnim({index : SlideAnim.index + 1, inProgress : false })
            },400)
        }
        else if(SlideAnim.index === dataSlider.length && !SlideAnim.inProgress){
            setSlideAnim({index : 1, inProgress : true})
            setTimeout(() => {
                setSlideAnim({index : 1, inProgress : false })
            },400)
        }
    }

    const prevSlide = () => {
        if(SlideAnim.index !== 1 && !SlideAnim.inProgress){
            setSlideAnim({index : SlideAnim.index - 1, inProgress: true})
            setTimeout(() => {
                setSlideAnim({index : SlideAnim.index - 1, inProgress : false})
            },400)
        }
        else if(SlideAnim.index === 1 && !SlideAnim.inProgress){
            setSlideAnim({index : dataSlider.length, inProgress: true})
            setTimeout(() => {
                setSlideAnim({index : dataSlider.length, inProgress : false})
            },400)
        }
    }

    const MoveDoc = index =>{
        setSlideAnim({index : index, inProgress : false })
    }

  return (
    <div className='container-slider'>
        {dataSlider.map((item, index) => {
            return (
                <div
                key={item.id}
                className={SlideAnim.index === index + 1 ? "slide active-anim" : "slide"}
                >
                    <img src={`/imgs/img${index + 1}.jpg`} alt="" />
                </div>
            )
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

        <div className="container-dots">
            {Array.from({length : 5}).map((item, index) => {
                return( 
                <div className={SlideAnim.index === index + 1 ? "dot active" : "dot"}
                onClick={() => MoveDoc(index + 1)}
                >
                </div>
                )
            })}
        </div>
    </div>
  )
}
