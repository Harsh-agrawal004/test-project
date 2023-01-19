const btn = document.querySelector("button");
// btn.preventDefault();
const form = document.querySelector('form');
const input = document.querySelectorAll("input");
const table = document.querySelector("table");

btn.addEventListener('click',function(event){
    
    event.preventDefault();
    const newRow = document.createElement("tr");
    for(inp of input){
        
       
        const newCell = document.createElement("td");
        const celltext = document.createTextNode(inp.value);
        newCell.appendChild(celltext);
        newRow.appendChild(newCell);
        table.appendChild(newRow);
        
    }
    
        form.reset();

    
    // newCell.removeChild(cellte)=
    
    
})

// event.preventDefault();

// for(inp of input){
//     console.log(inp.value);
// }
console.log(input.value);
