import React, { useState } from 'react'
import food1 from '../../../images/plate1.png'
import food2 from '../../../images/plate2.png'
import food3 from '../../../images/plate3.png'
import food4 from '../../../images/plate4.png'

const initialImgCollector = {
    firstImg: food1,
    secondImg: food2,
    thirdImg: food3,
    fourthImg: food4
}

const AboutUsImg = () => {
    const [stateImg, setStateImg] = useState(initialImgCollector)
    const [ImgDiv, setImgDiv] = useState('start')
    const [smallImgDiv2, setsmallImgDiv2] = useState('start')
    const [smallImgDiv3, setsmallImgDiv3] = useState('start')
    const [smallImgDiv4, setsmallImgDiv4] = useState('start')

    const ImgAnimation = async (imgCount) => {
        await disAppearImg1(imgCount)
        await changeImg(imgCount)
        await appearImg1(imgCount)
    }

    const disAppearImg1 = (imgCount) => {
        return new Promise((resolve, reject) => {
            if (imgCount === 'secondImg') {
                setsmallImgDiv2('small-img-div-disappear2')
                console.log('aaa')
            }
            if (imgCount === 'thirdImg') {
                setsmallImgDiv3('small-img-div-disappear3')
            }
            if (imgCount === 'fourthImg') {
                setsmallImgDiv4('small-img-div-disappear4')
            }
            setImgDiv('img-div-disappear')
            resolve();
        })
    }

    const changeImg = (imgCount) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (imgCount === 'secondImg') {
                    setsmallImgDiv2('small-img-div-takeplace2')
                    setStateImg({ ...stateImg, firstImg: stateImg.secondImg, secondImg: stateImg.firstImg })
                }
                if (imgCount === 'thirdImg') {
                    setsmallImgDiv3('small-img-div-takeplace3')
                    setStateImg({ ...stateImg, firstImg: stateImg.thirdImg, thirdImg: stateImg.firstImg })
                }
                if (imgCount === 'fourthImg') {
                    setsmallImgDiv4('small-img-div-takeplace4')
                    setStateImg({ ...stateImg, firstImg: stateImg.fourthImg, fourthImg: stateImg.firstImg })
                }
                setImgDiv('img-div-takeplace')
                resolve();
            }, 500)
        })
    }
    const appearImg1 = (imgCount) => {
        return new Promise((resolve, reject) => {
            if (imgCount === 'secondImg') {
                setsmallImgDiv2('small-img-div-appear2')
            }
            if (imgCount === 'thirdImg') {
                setsmallImgDiv3('small-img-div-appear3')
            }
            if (imgCount === 'fourthImg') {
                setsmallImgDiv4('small-img-div-appear4')
            }
            setImgDiv('img-div-appear')
            resolve();

        })
    }

    return (
        <div className="inner2-img-containers">
            <div className="big-img-container">
                <div className={`img-div ${ImgDiv}`}>
                    <div className="bigger-img-shadow"></div>
                    <img src={stateImg.firstImg} alt="" />
                </div>
            </div>
            <div className="small-img-container">
                <div className="img-child img-child1">
                    <div className={`small-img-div small-img-div2 ${smallImgDiv2}`} onClick={() => { ImgAnimation('secondImg') }}>
                        <div className="img-shadow"></div>
                        <img src={stateImg.secondImg} alt="" />
                    </div>
                </div>
                <div className="img-child img-child2">
                    <div className={`small-img-div small-img-div3 ${smallImgDiv3}`} onClick={() => { ImgAnimation('thirdImg') }}>
                        <div className="img-shadow"></div>
                        <img src={stateImg.thirdImg} alt="" />
                    </div>
                </div>
                <div className="img-child img-child3">
                    <div className={`small-img-div small-img-div4 ${smallImgDiv4}`} onClick={() => { ImgAnimation('fourthImg') }}>
                        <div className="img-shadow"></div>
                        <img src={stateImg.fourthImg} alt="" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AboutUsImg
