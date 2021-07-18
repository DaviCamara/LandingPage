import React from "react";
import "./styles.css";


    

export default function App() {
  return(
        <div id='body'>
            <Header/>
            <Card 
                className='section'
                img='./Capture1.PNG'
                title='Eletrônicos!' 
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.'
            />

            <Card 
                className='section bg-grey'
                img='./Capture3.PNG' 
                title='Eletrodomésticos!'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.'
            />

            <Card 
                className='section'
                img='./Capture1.PNG' 
                title='Outras Ofertas!' 
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.'
            />
            <ContactContainer/>
        </div>
    );
}

const Header = () =>{


    return(
        
        <div className='header'>
            <span className='header-title'>
                Promoção de Black Friday!!!
            </span>
            <br/>
            <span className="header-text">
                Não perca essa oportunidade incrível de ofertas!
            </span>
        </div>
    );
}







const Card = (props) =>{
    return(
        <div className={props.className} >
            <div className="small-div">
                <i className={props.className}></i>
                <img src={props.img} alt=''/>
            </div>

            <div className="big-div">
                <span className='div-title'>
                    {props.title}
                </span>
                <br/>
                <span>
                    {props.description}
                </span>
            </div>
        </div>
    )
}



const ContactContainer = () => {
    return(
        <div className='contact-container bg-grey'>
            <span className="div-title">Fale Conosco</span>
            <div className='contact-form'>
                <div id='sect1'>
                    <span>Se inscreva para receber mais promoções imperdiveis como está</span>
                    <span>
                        <i className="fas fa-map-marker-alt"></i>
                        Loja ficticia
                    </span>
                    <span>
                        <i className="fas fa-mobile-alt"></i>
                        (85) 99765 4424
                    </span>
              
                </div>
                    
                <div id='sect2'>
                    <span>
                        Se inscreva
                    </span>

                    <input type="text" id="email" placeholder="email address" className="input-field"/>
                    <textarea type="text" placeholder="telefone" className="input-fied"></textarea>
                    <button className="contact-btn" onClick={ () => localStorage.setItem('email','email')} >Send</button>
                </div>
            </div>
        </div>
    );

}
