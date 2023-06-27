import React from 'react'
import vg from "../assets/2.webp"
import {AiFillAmazonCircle,AiFillGoogleCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"


function Home() {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>TechyStar</h1>
            <p>Solution to all youe problems</p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam laborum culpa, sit eum hic voluptatum magnam voluptas dolorum libero! Illo quod eos tempore quasi iure dolores magnam laborum suscipit quo ea voluptate velit asperiores dolorem debitis explicabo sapiente earum, modi placeat eveniet neque beatae ab. Voluptatibus eveniet consectetur, veniam commodi eius repellat aliquid laboriosam eaque vel nam optio aperiam quam minus dignissimos harum nostrum. Itaque quas, est error ducimus fugiat amet illum animi modi ullam cum dolor, ex tempore similique. Animi officia consectetur fugit aspernatur mollitia quasi ratione? A pariatur quisquam quis, cum illum, voluptate asperiores architecto rem dignissimos facere culpa, maxime reprehenderit optio. Quaerat reiciendis quasi quisquam quas omnis voluptate molestiae minima sint laboriosam quo tenetur suscipit recusandae rem, mollitia itaque accusantium a magni, tempore adipisci laborum architecto? Veritatis, quos sit quas nulla harum excepturi laborum est nihil tenetur laboriosam cum ipsum asperiores perspiciatis! Libero perspiciatis illo delectus ut, fugiat dolor nobis fugit adipisci, quia hic, facere nemo. Fugit?
            </p>
        </div>

    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style = {{animationDelay: "0.3s"}}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style = {{animationDelay: "0.5s"}}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style = {{animationDelay: "0.7s"}}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                <div style = {{animationDelay: "0.7s"}}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home