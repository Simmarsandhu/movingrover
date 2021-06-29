var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");


var pics=["mars_1.jpg","mars_2.jpg","mars_3.jpg","mars_4.jpg","mar_5.jpg"];

random_number=Math.floor(Math.random()*5);
console.log(random_number);
background_img=pics[random_number];
console.log(background_img);

rover_img="rover.png";
var rover_width=100;
var rover_height=100;
rover_x=5;
rover_y=5;



function add(){

    background_img1= new Image();
    background_img1.onload=bg_add_image;
    background_img1.src=background_img;

    rover_img1= new Image();
    rover_img1.onload=rv_add_image;
    rover_img1.src=rover_img;


    

}

function bg_add_image(){
  ctx.drawImage(background_img1,0,0,canvas.width,canvas.height);

}

function rv_add_image(){
    ctx.drawImage(rover_img1,rover_x,rover_y,rover_width,rover_height);
  
  }

  window.addEventListener("keydown",Key_click);

  function Key_click(e){
         var click=e.keyCode;
         console.log(click);

         if(click==38){
             Up();
             console.log("up");
         }
          
         if(click==39){
                right();
                console.log("Right");
         }

         if(click==40){
            down();
            console.log("down");

         }
         if(click==37){
            Left();
            console.log("Left");}
         }

function Up(){
  if(rover_y>=0){

    rover_y=rover_y-15;
    console.log("x="+rover_x+"y="+rover_y);
    bg_add_image();
    rv_add_image();
  }

}

function down(){
  if(rover_y<=600){

    rover_y=rover_y+15;
    console.log("x="+rover_x+"y="+rover_y);
    bg_add_image();
    rv_add_image();
  }

}

function right(){
  if(rover_x<=700){

    rover_x=rover_x+15;
    console.log("x="+rover_x+"y="+rover_y);
    bg_add_image();
    rv_add_image();
  }

}


function Left(){
  if(rover_x>=0){

    rover_x=rover_x-15;
    console.log("x="+rover_x+"y="+rover_y);
    bg_add_image();
    rv_add_image();
  }

}
        