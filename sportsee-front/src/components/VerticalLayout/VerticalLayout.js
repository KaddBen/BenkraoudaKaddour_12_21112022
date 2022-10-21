import React from "react";
import './VerticalLayout.css'
import bike from '../../assets/bike.png'
import swim from '../../assets/swim.png'
import weight from '../../assets/weight.png'
import yoga from '../../assets/yoga.png'

const VerticalLayout = () => {

    return(
<div class="VerticalLayout">       
<img src ={yoga}></img>
<img src ={swim}></img>
<img src ={bike}></img>
<img src ={weight}></img>

<div>Copyright,Sportsee 2020</div>
</div>
    )

}
export default VerticalLayout;