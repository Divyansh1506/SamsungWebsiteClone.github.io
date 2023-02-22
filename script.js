const swiper = new Swiper('.swiper', {
    autoplay:{
        delay:3500,
        disableOnInteraction: false,
    },
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
      
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   
  });




const tabs = document.querySelectorAll(".tabs li");
const contents = document.querySelectorAll(".content")

tabs.forEach((tab, index)=>{
    tab.addEventListener("click",() =>{

        tabs.forEach((tab)=> tab.classList.remove("active"));


        tab.classList.add("active");

        contents.forEach((c)=> c.classList.remove("active"));
        contents[index].classList.add("active");
    });
});


