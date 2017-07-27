

//19.	Implement a custom iterator which will auto generate employee numbers. 
//Terminate the iterator once employee number reached to 345.

let custEmployeeNo = {
    [Symbol.iterator] (){
       let myinitialNo = 1;
        return {
            next() {
                let value = myinitialNo > 345 ? undefined : myinitialNo++;
                let done = !value;
                return {
                    value,
                    done
                };
            }
        }
    }
};

for (let empNo of custEmployeeNo) {
    console.log(empNo);
}