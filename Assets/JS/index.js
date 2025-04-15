function showEducation(){

    const edu = document.getElementById("Education-para");
    const myself = document.getElementById("Myself-para");
    const skill = document.getElementById("Skills-Para");
    const btn = document.getElementById("edu-btn");
    const selfBtn = document.getElementById("myself-btn");
    const skillBtn = document.getElementById("skill-btn");
    
 edu.style.display = "block"
 myself.style.display = "none"
 skill.style.display = "none"

 selfBtn.style.color = "rgb(182, 182, 182)"
 btn.style.color = "#123458"
 skillBtn.style.color = "rgb(182, 182, 182)"


}

function showMyself(){
    const edu = document.getElementById("Education-para");
    const myself = document.getElementById("Myself-para");
    const btn = document.getElementById("edu-btn");
    const selfBtn = document.getElementById("myself-btn");
    const skillBtn = document.getElementById("skill-btn");
    const skill = document.getElementById("Skills-Para");

 edu.style.display = "none"
 myself.style.display = "block"
skill.style.display = "none"


 btn.style.color = "#123458"

 selfBtn.style.color = "#123458"
 btn.style.color = "rgb(182, 182, 182)"
 skillBtn.style.color = "rgb(182, 182, 182)";

 

}

function showSkills(){
    const skill = document.getElementById("Skills-Para");
    const myself = document.getElementById("Myself-para");
    const edu = document.getElementById("Education-para");
    const btn = document.getElementById("edu-btn");
    const selfBtn = document.getElementById("myself-btn");
    const skillBtn = document.getElementById("skill-btn");

 skill.style.display = "block"
 myself.style.display = "none"
  edu.style.display = "none"
 

 selfBtn.style.color = "rgb(182, 182, 182)"
 btn.style.color = "rgb(182, 182, 182)"
 skillBtn.style.color = "#123458"

}

function imgHover(){
   let a = document.getElementById("hover-text-project");

  
  a.style.display = "block"
 
  
}
