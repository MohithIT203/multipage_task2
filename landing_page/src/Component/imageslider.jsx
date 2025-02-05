import React, { useEffect, useState } from "react";
import './navbar.css';
function ImageSlider() {
    const[Index,setIndex]=useState(0)
    const Images=[
        "https://zdblogs.zohowebstatic.com/sites/simplifiedCX/files/2023-05/An-easy-guide-to-ecommerce-customer-service.png",
        "https://www.tekshapers.com/uploads/blog_image/1536238340benefits-of-e-commerce.jpg",
        "https://cdn.acowebs.com/wp-content/uploads/2019/02/Impact-of-eCommerce-On-Society.png",
        "https://miro.medium.com/v2/resize:fit:1200/0*RhlbQc8S0AV44tYp.jpg",
        "https://static.vecteezy.com/system/resources/thumbnails/035/198/647/small_2x/ai-generated-online-shopping-representation-with-people-on-digital-devices-surrounded-by-gifts-and-icons-of-products-photo.jpg"
    ]
    useEffect(() => {
        const timer = setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % Images.length);
        }, 3000);
    
        return () => clearTimeout(timer);
      }, [Index]);
    return (
        <>
        <div style={{textAlign:"center"}}>
            <img 
            src={Images[Index]}
            style={{ width: "1100px", 
                height: "560px", 
                borderRadius: "10px",
                 transition:"ease-in",
                 position:"relative",
                 top:"50px" }} 
            
            ></img>
            </div>
        </>
    );
}
export default ImageSlider