  function updateText(){
    let text= document.getElementById("text-input").value;
    document.getElementById("text-output").innerHTML= text;
  }

  function alignText(elem, alignType){
    // CODE GOES HERE
    document.getElementById("text-output").style.textAlign=alignType;
    let buttonsList = document.getElementsByClassName("align");
    for ( let i =0 ; i< buttonsList.length ; i++){
      buttonsList[i].classList.remove('active');
    }
    elem.classList.add('active');


  }
  function changeColor(elem, color){
    document.getElementById("text-output").style.color = color;
    let buttonsList = document.getElementsByClassName("Color");
    for ( let i =0 ; i< buttonsList.length ; i++){
      buttonsList[i].classList.remove('active');
    }
    elem.classList.add('active');
  }

  // function changeColor(elem, color){
  //   document.getElementById("text-output").style.color = color;
  //   let buttonsList = document.getElementsByClassName("Color");
  //   for ( let i =0 ; i< buttonsList.length ; i++){
  //     buttonsList[i].classList.remove('active');
  //   }
  //   elem.classList.add('active');
  // }

  function changeHeading(elem, heading){
    document.getElementById("text-output").style.fontSize = heading;
    let buttonsList = document.getElementsByClassName("heading");
    for ( let i =0 ; i< buttonsList.length ; i++){
      buttonsList[i].classList.remove('active');
    }
    elem.classList.add('active');
  }
  // function makeBlue(elem){
  //   elem.classList.toggle('active');
  //   document.getElementById("text-output").classList.toggle('blue');
  //   for ( let i =0 ; i< buttonsList.length ; i++){
  //     buttonsList[i].classList.remove('active');
  //   }
  //   elem.classList.add('active');
    
  // }

  // function makeGreen(elem){
  //   elem.classList.toggle('active');
  //   document.getElementById("text-output").classList.toggle('green');
  //   for ( let i =0 ; i< buttonsList.length ; i++){
  //     buttonsList[i].classList.remove('active');
  //   }
  //   elem.classList.add('active');
    
  // }

  // function makeRed(elem){
  //   elem.classList.toggle('active');
  //   document.getElementById("text-output").classList.toggle('red');
  //   for ( let i =0 ; i< buttonsList.length ; i++){
  //     buttonsList[i].classList.remove('active');
  //   }
  //   elem.classList.add('active');
  // }
  // function ChangeToRed(elem,the-color){
  //   elem.classList.toggle('active');
  //   document.getElementById("text-output").classList.toggle('red');
  // }
  // function makeHeadingToOne(elem){
  //   elem.classList.toggle('active');
  //   document.getElementById("text-output").style.fontSize ="32px";
    
  // }
  // function makeHeadingToTwo(elem){
  //   elem.classList.toggle('active');
  //   document.getElementById("text-output").style.fontSize ="24px";
    
  // }  
  // function makeHeadingToThree(elem){
  //   elem.classList.toggle('active');
  //   document.getElementById("text-output").style.fontSize ="20.8px";
    
  // }
  function makeBold(elem){
    elem.classList.toggle('active');
    document.getElementById("text-output").classList.toggle('bold');
    
  }
  

  function makeItalic(elem){
    elem.classList.toggle('active');
    document.getElementById("text-output").classList.toggle('italic');
   
    }
  
  function makeUnderline(elem){
    elem.classList.toggle('active');

    let FormattedText = document.getElementById("text-output");
    if(FormattedText.classList.contains('underline')){
      FormattedText.classList.remove('underline');
    }else{
      FormattedText.classList.add('underline');
    }

  }

