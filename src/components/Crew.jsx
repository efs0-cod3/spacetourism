import React, { useState } from "react";
import "../Crew.css";
import MobileNavbar from "./MobileNavbar";

export default function Crew(props) {
  const [crew, setCrew] = useState(props.crew);
    const [index, setIndex] = useState(0)

    const crewCircles = crew.map((el, i) => {
        return (
            <div key={i} className={"circle " + (index === i ? "c-active" : "")} onClick={() => getCrewMember(i)}>
                       <p className="num">{i}</p>
                    </div>
        )
    })

    // const crewElements = crew.map((el,i) => {
    //     return (
    //         <div className="crew-info">
    //             <section className="crew-img-section">
    //             <img className="crewMemberImg" src={el.images.png}/>
    //             </section>
    //             <section>
    //                 <div className="circles">
    //                 {crewCircles}
    //                 </div>
    //                 <section>
    //                     <h3>{el.role}</h3>
    //                     <h2>{el.name}</h2>
    //                     <div>
    //                         <p>{el.bio}</p>
    //                     </div>
    //                 </section>
    //             </section>
    //         </div>
    //     )
    // })

    const eachCrewMember = crew.filter((el, i) => i === index)


  function getCrewMember(e) {
    setIndex(e)
    // setCrew(prevCrew => prevCrew.filter((el, i) => i === index))
  }



  return (
    <div className="crew">
      <MobileNavbar />
      <section>
        <h2 className="meet">
          <span className="meet-bld">02</span> meet your crew
        </h2>
        { eachCrewMember.map((el,i) => {
            return (
                <div className="crew-info" key={i}>
                <section className="crew-img-section">
                <img className="crewMemberImg" src={el.images.png}/>
                </section>
                <section>
                    <div className="circles">
                    {crewCircles}
                    </div>
                    <section>
                        <h3 className="role">{el.role}</h3>
                        <h2 className="name">{el.name}</h2>
                        <div className="bio">
                            <p>{el.bio}</p>
                        </div>
                    </section>
                </section>
            </div>
            )
        })}
      </section>
    </div>
  );
}
