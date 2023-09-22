function mydetails(){
  let age = 10;
  let name = 'erastus munyao kyalo';
  let school = 'dekut';
  let course = 'BSC computer science';
  let yearofstudy = '3rd year second semester(3.2)';
  document.getElementById('details').innerHTML = `My name is ${name}.\n 
  Iam ${age} years old.\n i study at ${school} and i pursue ${course}.\n
  iam in ${yearofstudy}.
  `;
  
}
function myaddition(){
    var num1 = Math.floor(Math.random()*100);
    var num2 = Math.floor(Math.random()*100);;
    const sum = num1 + num2;
    document.getElementById('sum').innerHTML = `${num1} + ${num2} = ${sum}`;
}

function mygrade() {
    // Prompt the user to enter marks
    let result;
    let marks;
    let totalmark;
    var grade = ['A', 'B', 'C', 'D', 'E'];
    // Convert the input to a number
    let english = prompt('Please enter your english marks');
    let Eng = parseFloat(english);
    let kiswahili = prompt('Please enter your kiswahili marks');
    let Kisw = parseFloat(kiswahili);
    let Maths = prompt('Please enter your Mathematics marks');
    let Math = parseFloat(Maths);
    let Chemistry = prompt('Please enter your chemistry marks');
    let Chem = parseFloat(Chemistry);
    let physics = prompt('Please enter your physics marks');
    let phy = parseFloat(physics);
    let Biology = prompt('Please enter your Biology marks');
    let Bio = parseFloat(Biology);
    let History = prompt('Please enter your History marks');
    let Histo = parseFloat(History);
    let Geography = prompt('Please enter your Geography marks');
    let Geo = parseFloat(Geography);
    let chris = prompt('Please enter your CRE marks');
    let christ = parseFloat(chris);
    let Agriculture = prompt('Please enter your Agriculture marks');
    let Agri = parseFloat(Agriculture);
    let BUsiness = prompt('Please enter your Business marks');
    let Bust = parseFloat(BUsiness);
    let Computer = prompt('Please enter your Computer marks');
    let Comp = parseFloat(Computer);
    // Check if user has entered invalid marks
    if (isNaN(Eng)&& isNaN(Kisw)&& isNaN(Math)&&
     isNaN(phy)&& isNaN(Chem) && isNaN(Histo)&&isNaN(christ)&& 
     isNaN(Agri)&&isNaN(Bio)&&isNaN(Bust)&&isNaN(Geo)&&isNaN(Comp)) {
        document.getElementById('grade').innerHTML = 'Please enter valid marks';
    } else{
         totalmark = Eng + Kisw + Math+phy
        +Chem+Bio+Histo+Geo+christ+Agri+Bust+Comp;
        marks = totalmark/12;
    }
        if (marks >= 0 && marks <= 39) {
            result = `${grade[4]}`;
        } else if (marks >= 40 && marks <= 49) {
            result = `${grade[3]}`;
        } else if (marks >= 50 && marks <= 59) {
            result = `${grade[2]}`;
        } else if (marks >= 60 && marks <= 69) {
            result = `${grade[1]}`;
        } else if (marks >= 70 && marks <= 100) {
            result = `${grade[0]}`;
        } else {
            result = 'Invalid marks';
        }
        document.getElementById('grade').innerHTML = `  your totalmarks = ${totalmark}.Your Grade is ${result}`;
    }
