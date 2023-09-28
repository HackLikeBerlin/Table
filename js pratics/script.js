
tableOfNumber=(e)=>{
    const tableData = document.querySelector('#table') 
    const input = document.querySelector('#num').value
    
    
    if(input==""){
        const tableData= document.querySelector('#table')
        tableData.innerHTML='Please Enter Number <br>'
     }
     else{
          
        for(var i=1;i<=10;i++){
        tableData.innerHTML+=`${input} x ${i} = ${input*i} <br>`
    
     }
      
    }

   
    
    
    
    
 }  

