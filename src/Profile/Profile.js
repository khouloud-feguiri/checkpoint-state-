import React, { Component } from "react";


export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.Profile= {
        fullName:"Angelina Jolie",
        bio:"née le 4 juin 1975 à Los Angeles, est une actrice, réalisatrice, scénariste, productrice, mannequin, écrivaine et ambassadrice de bonne volonté américano - cambodgienne. Elle a reçu trois Golden Globes, deux Screen Actors Guild Awards et un Oscar du cinéma.",
        profession:"Actrice",
        
        
        }

        this.state={count:0}
      }

      componentDidMount(){
          setInterval(()=>{
              this.setState(prevState=>({
                  count: prevState.count+1
              }))
            },1000)
    }
    
    
      render() {

  return (
    <div>
      <img
        src="https://www.gala.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F06.2F30.2Ffd3bc784-c9c9-419a-944c-252f923add51.2Ejpeg/2047x1536/quality/80/angelina-jolie.jpeg"alt="pic"
        style={{
          width: "500px",
          height: "250px",
          display: "flex",
          margin: "auto",
          border: "5px solid #555",
        }}
      />
      <div style={{ color: "green", textAlign: "center" }}>
        <h1>{this.Profile.fullName}</h1>
        <h3>{this.Profile.bio}</h3>
        <h4>{this.Profile.profession}</h4>
      <h2>{this.state.count} Sec...</h2>
      </div>
    </div>
  )
}
}