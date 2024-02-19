import React from "react";


const Card = ({title}) => { 

  let cardArr = [
    {
        src:"  https://rukminim2.flixcart.com/image/612/612/ks6ef0w0/jacket/h/c/1/xl-nmnt-7004-montrez-original-imag5t3nydfvywgw.jpeg?q=70",
        title:"RED TAPE",
        desc:"Men Solid Padded Jacket"
    },
    {
        src:" https://rukminim2.flixcart.com/image/612/612/jtd98y80/jacket/b/8/3/xl-6411433-roadster-original-imafeqh7vuks7wsv.jpeg?q=70",
        title:"AZF",
        desc:"Men Solid Casual Jacket"
    },
    {
        src:" https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/q/j/l/l-1-no-hsmjkw23117d-ig2-high-star-original-imagxkxycquuyscx.jpeg?q=70",
        title:"MONTREZ",
        desc:"Men Solid Casual Jacket"
    },
    {
        src:"https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/9/e/j/xxl-lrm33bl00017-leather-retail-original-imag56zkcyzbzwee-bb.jpeg?q=70",
        title:"VeBNoR",
        desc:"Men Washed Jacket"
    },{
        src:"  https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/p/c/z/s-no-rtmjkt092slblack-rare-times-original-imagurumgzmmfqgp.jpeg?q=70",
        title:"RED TAPE",
        desc:"Men Solid Padded Jacket"
    },
    {
        src:"  https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/i/l/x/xl-no-men-pln-navy-pp-jkt-avinexx-original-imagg7mav9cxtya5.jpeg?q=70",
        title:"AZF",
        desc:"Men Solid Casual Jacket"
    },
    {
        src:"  https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/c/u/f/m-mnt-7024-montrez-original-imag5hb9hqcc4qyy-bb.jpeg?q=70",
        title:"MONTREZ",
        desc:"Men Solid Casual Jacket"
    },
    {
        src:" https://rukminim2.flixcart.com/image/612/612/jsuoivk0/jacket/n/f/n/l-4453300-hrx-by-hrithik-roshan-original-imafec56swf9hhpe.jpeg?q=70",
        title:"VeBNoR",
        desc:"Men Washed Jacket"
    },
  ]
    
  return (
    cardArr.map((val,ind)=>
        <div class="card mt-5 mx-3 p-0" style={{width: "18rem" }}>
          <img src={val.src} class="card-img-top " style={{height:"350px"}} alt="..." />
          <div class="card-body">
            <h5 class="card-title">{val.title}</h5>
            <p class="card-text">
              {val.desc}
            </p>
            <a href="#" class="btn btn-primary">
              Shop Now
            </a>
          </div>
        </div>
    )
  );
};

export default Card;
