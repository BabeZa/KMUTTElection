import React, { Component } from 'react'
import Check from './asserts/check.png';
import facebook from './asserts/facebook.png';
import line from './asserts/line.png';
import twitter from './asserts/twitter.png';
import instagram from './asserts/instagram.png';
import './Text.css';


class Finish extends Component {
    constructor() {
      super()
    }



    render() {
      const {values} = this.props;
      return (
        <div style={{
          display: 'flex',
          alignItems:'center',
          flexDirection: "column",

          }}>

            <div style={{
                display: 'flex',
                flexDirection: "column",
                alignItems:'center',
                maxWidth: 700,
                width: '90%',
                backgroundColor: "#ffffff",
                borderRadius: 20,
                marginTop: 40,
                border: "2px solid black",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                padding: "30px 5px"


            }}>
                <img src={Check} alt="Check" style={{maxWidth: 150,width: "40%",alignSelf: "center",marginBottom: 10}}/>
                <h1 class="headXL" style={{fontWeight: 'bold',textAlign: "center"}}>{values.Lang === "th" ? "การเลือกตั้งสำเร็จ" : "Election Process Completed"}</h1>
                {values.Lang === "th" ? <p class="textM" style={{marginTop: 20,textAlign: "center"}}><b>ขอบคุณ</b>ที่ร่วมมาใช้สิทธิ์ของท่าน<br /><b>และขอบคุณ</b>ที่เป็นส่วนหนึ่ง<br />ในการเปลี่ยนแปลงมหาวิทยาลัยของพวกเรา</p>: <p class="textM" style={{marginTop: 20,textAlign: "center"}}><b>Thank you,</b> for using your right<br /><b>and Thank you,</b> for being the part inimplemetation of our university</p>}
            </div>

            <p class="textS" style={{marginTop: 30,textAlign: "center"}}>{values.Lang === "th" ? "สามารถแชร์ต่อเพื่อให้เพื่อนๆมาเลือกตั้งได้ที่" : "Share this election to your friend through"}</p>
            <div style={{
                display: 'flex',
                flexDirection: "row",
                width: '100%',
                justifyContent:'center',


            }}>

              <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A//google.com/"><img src={facebook} style={{width: 40,alignSelf: "center",marginRight: 10}}/></a>
              {/* <img src={facebook} style={{width: 50,alignSelf: "center",marginRight: 10}}/>
              <img src={facebook} style={{width: 50,alignSelf: "center",marginRight: 10}}/> */}
              <a href="https://twitter.com/intent/tweet?text=http%3A//google.com/"><img src={twitter} style={{width: 40,alignSelf: "center"}}/></a>
            </div>
            <a class="textS" style={{marginTop: 25,textAlign: "center"}}>{values.Lang === "th" ? "และสามารถติดตามข่าวสารการเลือกตั้งได้ที่" : "For more information, see in facebook page"}</a>
            <a class="textM" style={{color: '#000000',textDecorationLine: "underline"}} href="https://www.facebook.com/KMUTT-Election-111526570306064">KMUTT Election</a>


        </div>

      )
    }
}

  export default Finish