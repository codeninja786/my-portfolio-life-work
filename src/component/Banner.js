import {useState, useEffect} from "react";
import { Container, Row, Colol } from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100 );
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(()=> {
            tick();


        },delta)
        return () => { clearInterval(ticker)};
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText)

        if (!isDeleting){
            setDelta(prevDelta => prevDelta / 2)

        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className= "banner" id="home">
            <container>
                <Row className="align-items-center">
                    <col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{'Hi i"m webdecoded and tested checking now'} <span className='wrap'>web developer</span></h1>
                        <p>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
                        <button onClick={() => console.log('connect')}>Let's Connect</button>
                    </col>
                    <col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>


                    </col>
                </Row>
            </container>
        </section>

    )
}