console.log('19. Implement a custom iterator which will auto generate employee numbers. Terminate the iterator once employee number reached to 345.');

//19. Implement a custom iterator which will auto generate employee numbers. 
//Terminate the iterator once employee number reached to 345.


let customIteratorForEmployeeNumbers = {
    [Symbol.iterator](){
        let employeeNumber = 1;
        return{
            next(){
                let value = employeeNumber>345?undefined:employeeNumber++;
                let done = ! value
                return{
                    value,done
                }
            }
        }
    }
}


for (let empNo of customIteratorForEmployeeNumbers){
    console.log(empNo);
}