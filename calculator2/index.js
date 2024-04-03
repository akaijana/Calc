let input = document.getElementById("input-text");
let buttons = document.querySelectorAll('button');

let butarr = Array.from(buttons);

let string = '';
butarr.forEach(but =>{
    
    but.addEventListener('click',(e) =>{

        
        if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value=string;
        }
        else if(e.target.innerHTML == 'AC'){
            string=''; // clear the string 
            // string = string.substring(0,string.length-1);
            input.value=string; // clearing the display

        }
        else if(e.target.innerHTML == '='){
            string = string.replace(/√(\d+)/g, 'Math.sqrt($1)');
            string = string.replace(/%/g, '/100*');
            string = string.replace(/(^|\D)0+(\d+)/g, '$1$2');
            string=eval(string);
            input.value=string; 

        }
        else{

            string += e.target.innerHTML;
            input.value = string;

        }
        

    });
});
// console.log(buttons);