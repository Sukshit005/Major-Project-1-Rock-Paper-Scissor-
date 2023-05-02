function load()
  {    
    document.getElementById("bottom1").style.display = "flex";
    document.getElementById("bottom2").style.display = "none";
    document.getElementById("bottom3").style.display = "none";
    document.getElementById("bottom4").style.display = "none";
    document.getElementById("next").style.display = "none";
   
    document.getElementById("popup-container").style.display = "none";
    
    let comp_scr = sessionStorage.getItem("comp_scr") || 0;
    document.getElementById("comp-score").innerText = comp_scr;

    let user_scr = sessionStorage.getItem("user_scr") || 0;
    document.getElementById("user-score").innerText = user_scr;

  }

function load2()
  {    
    document.getElementById("popup-container").style.display = "none";

  }

function rules()
  {
    document.getElementById("popup-container").style.display = "block";
   
    document.getElementById("button-1").disabled = true;
    document.getElementById("button-2").disabled = true;
    document.getElementById("button-3").disabled = true;
    document.getElementById("bottom2-div2-button").disabled = true;
    document.getElementById("bottom3-div2-button").disabled = true;
    document.getElementById("bottom4-div2-button").disabled = true;

  }

function norules()
  {
    document.getElementById("popup-container").style.display = "none";
    document.getElementById("button-1").disabled = false;
    document.getElementById("button-2").disabled = false;
    document.getElementById("button-3").disabled = false;
    document.getElementById("bottom2-div2-button").disabled = false;
    document.getElementById("bottom3-div2-button").disabled = false;
    document.getElementById("bottom4-div2-button").disabled = false;

  }

function rules2(){
    document.getElementById("popup-container").style.display = "block";
  }

function norules2(){
    document.getElementById("popup-container").style.display = "none";
  }
/* FOR ROCK BUTTON */

function rock()
  {
    let usernum=1;
    let compnum = Math.floor(Math.random() * 3) + 1;
    
    if(compnum==1)
    {
    
    document.getElementById("bottom1").style.display = "none";
    document.getElementById("bottom2").style.display = "none";
    document.getElementById("bottom3").style.display = "none";
    document.getElementById("bottom4").style.display = "flex";
    document.getElementById("popup-container").style.top= "-4.2vh";
    document.getElementById("bottom4-div1-div1").style.backgroundImage = "url('images/rock.png')";
    document.getElementById("bottom4-div1-div1").style.borderColor = "#0074B6";
    document.getElementById("bottom4-div3-div1").style.backgroundImage = "url('images/rock.png')";
    document.getElementById("bottom4-div3-div1").style.borderColor = "#0074B6";
    document.getElementById("next").style.display = "block";
    
    }

    else if(compnum==2)
    {
      document.getElementById("bottom1").style.display = "none";
      document.getElementById("bottom2").style.display = "none";
      document.getElementById("bottom3").style.display = "flex";
      document.getElementById("bottom4").style.display = "none";
      document.getElementById("popup-container").style.top= "-4.2vh";
      document.getElementById("bottom3-div1-div1").style.backgroundImage = "url('images/rock.png')";
      document.getElementById("bottom3-div1-div1").style.borderColor = "#0074B6";
      document.getElementById("bottom3-div3-div1").style.backgroundImage = "url('images/paper.png')";
      document.getElementById("bottom3-div3-div1").style.borderColor = "#FFA943";
      document.getElementById("next").style.display = "block";

      let c1 = Number(document.getElementById("comp-score").innerText) ;
      c1=c1+1;
      sessionStorage.setItem("comp_scr",c1);
      let comp_scr = sessionStorage.getItem("comp_scr");
      document.getElementById("comp-score").innerText = comp_scr;
    
    }
    
    else
    {
      document.getElementById("bottom1").style.display = "none";
      document.getElementById("bottom2").style.display = "flex";
      document.getElementById("bottom3").style.display = "none";
      document.getElementById("bottom4").style.display = "none";
      document.getElementById("popup-container").style.top= "-4.2vh";
      document.getElementById("bottom2-div1-img1").style.backgroundImage = "url('images/rock.png')";
      document.getElementById("bottom2-div1-img1").style.borderColor = "#0074B6";
      document.getElementById("bottom2-div3-img1").style.backgroundImage = "url('images/scissor.png')";
      document.getElementById("bottom2-div3-img1").style.borderColor = "#BD00FF";
      document.getElementById("bottom2-div3-img1").style.backgroundSize= "3vw";
      document.getElementById("next").style.display = "block";

      let u1 = Number(document.getElementById("user-score").innerText) ;
      u1=u1+1;
      sessionStorage.setItem("user_scr",u1);
      let user_scr = sessionStorage.getItem("user_scr");
      document.getElementById("user-score").innerText = user_scr;
    }
  }



  /* FOR PAPER BUTTON */

function paper()
  {
    let usernum=2;
    let compnum = Math.floor(Math.random() * 3) + 1;
    
    if(compnum==1)
    {
    
    document.getElementById("bottom1").style.display = "none";
    document.getElementById("bottom2").style.display = "flex";
    document.getElementById("bottom3").style.display = "none";
    document.getElementById("bottom4").style.display = "none";
    document.getElementById("popup-container").style.top= "-4.2vh";
    document.getElementById("bottom2-div1-img1").style.backgroundImage = "url('images/paper.png')";
    document.getElementById("bottom2-div1-img1").style.borderColor = "#FFA943";
    document.getElementById("bottom2-div3-img1").style.backgroundImage = "url('images/rock.png')";
    document.getElementById("bottom2-div3-img1").style.borderColor = "#0074B6";
    document.getElementById("next").style.display = "block";

    let u1 = Number(document.getElementById("user-score").innerText) ;
    u1=u1+1;
    sessionStorage.setItem("user_scr",u1);
    let user_scr = sessionStorage.getItem("user_scr");
    document.getElementById("user-score").innerText = user_scr;
    
    }

    else if(compnum==2)
    {
      document.getElementById("bottom1").style.display = "none";
      document.getElementById("bottom2").style.display = "none";
      document.getElementById("bottom3").style.display = "none";
      document.getElementById("bottom4").style.display = "flex";
      document.getElementById("popup-container").style.top= "-4.2vh";
      document.getElementById("bottom4-div1-div1").style.backgroundImage = "url('images/paper.png')";
      document.getElementById("bottom4-div1-div1").style.borderColor = "#FFA943";
      document.getElementById("bottom4-div3-div1").style.backgroundImage = "url('images/paper.png')";
      document.getElementById("bottom4-div3-div1").style.borderColor = "#FFA943";
      document.getElementById("next").style.display = "block";

    }

    else
    {
      document.getElementById("bottom1").style.display = "none";
      document.getElementById("bottom2").style.display = "none";
      document.getElementById("bottom3").style.display = "flex";
      document.getElementById("bottom4").style.display = "none";
      document.getElementById("popup-container").style.top= "-4.2vh";
      document.getElementById("bottom3-div1-div1").style.backgroundImage = "url('images/paper.png')";
      document.getElementById("bottom3-div1-div1").style.borderColor = "#FFA943";
      document.getElementById("bottom3-div3-div1").style.backgroundImage = "url('images/scissor.png')";
      document.getElementById("bottom3-div3-div1").style.borderColor = "#BD00FF";
      document.getElementById("bottom3-div3-div1").style.backgroundSize= "3vw";
      document.getElementById("next").style.display = "block";

      let c1 = Number(document.getElementById("comp-score").innerText) ;
      c1=c1+1;
      sessionStorage.setItem("comp_scr",c1);
      let comp_scr = sessionStorage.getItem("comp_scr");
      document.getElementById("comp-score").innerText = comp_scr;

    }
  }
  

  /* FOR SCISSOR BUTTON */

function scissor()
  {
    let usernum=3;
    let compnum = Math.floor(Math.random() * 3) + 1;
    if(compnum==1)
    {
      document.getElementById("bottom1").style.display = "none";
      document.getElementById("bottom2").style.display = "none";
      document.getElementById("bottom3").style.display = "flex";
      document.getElementById("bottom4").style.display = "none";
      document.getElementById("popup-container").style.top= "-4.2vh";
      document.getElementById("bottom3-div1-div1").style.backgroundImage = "url('images/scissor.png')";
      document.getElementById("bottom3-div1-div1").style.borderColor = "#BD00FF";
      document.getElementById("bottom3-div3-div1").style.backgroundImage = "url('images/rock.png')";
      document.getElementById("bottom3-div3-div1").style.borderColor = "#0074B6";
      document.getElementById("bottom3-div1-div1").style.backgroundSize= "3vw";
      document.getElementById("next").style.display = "block";

      let c1 = Number(document.getElementById("comp-score").innerText) ;
      c1=c1+1;
      sessionStorage.setItem("comp_scr",c1);
      let comp_scr = sessionStorage.getItem("comp_scr");
      document.getElementById("comp-score").innerText = comp_scr;
    }
    
    else if(compnum==2)
    {
      document.getElementById("bottom1").style.display = "none";
      document.getElementById("bottom2").style.display = "flex";
      document.getElementById("bottom3").style.display = "none";
      document.getElementById("bottom4").style.display = "none";
      document.getElementById("popup-container").style.top= "-4.2vh";
      document.getElementById("bottom2-div1-img1").style.backgroundImage = "url('images/scissor.png')";
      document.getElementById("bottom2-div1-img1").style.borderColor = "#BD00FF";
      document.getElementById("bottom2-div3-img1").style.backgroundImage = "url('images/paper.png')";
      document.getElementById("bottom2-div3-img1").style.borderColor = "#FFA943";
      document.getElementById("bottom2-div1-img1").style.backgroundSize= "3vw";
      document.getElementById("next").style.display = "block";

      let u1 = Number(document.getElementById("user-score").innerText) ;
      u1=u1+1;
      sessionStorage.setItem("user_scr",u1);
      let user_scr = sessionStorage.getItem("user_scr");
      document.getElementById("user-score").innerText = user_scr;
    }

    else{
      document.getElementById("bottom1").style.display = "none";
      document.getElementById("bottom2").style.display = "none";
      document.getElementById("bottom3").style.display = "none";
      document.getElementById("bottom4").style.display = "flex";
      document.getElementById("popup-container").style.top= "-4.2vh";
      document.getElementById("bottom4-div1-div1").style.backgroundImage = "url('images/scissor.png')";
      document.getElementById("bottom4-div1-div1").style.borderColor = "#BD00FF";
      document.getElementById("bottom4-div3-div1").style.backgroundImage = "url('images/scissor.png')";
      document.getElementById("bottom4-div3-div1").style.borderColor = "#BD00FF";
      document.getElementById("bottom4-div1-div1").style.backgroundSize= "3vw";
      document.getElementById("bottom4-div3-div1").style.backgroundSize= "3vw";
      document.getElementById("next").style.display = "block";
    }
  }


function next()
  {
    let c1= Number(document.getElementById("comp-score").innerText) ;
    let u1= Number(document.getElementById("user-score").innerText) ;
    if (u1>=c1){
      window.open("page2.html","_self");
      sessionStorage.clear()
    }
    else{
      window.open("page3.html","_self");
      sessionStorage.clear()
    }
    
  }

function new_page()
    {

       window.open("page1.html","_self");
      
    }