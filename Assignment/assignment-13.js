//13. Create a module which will export mathematical functions using object. Consume the module to perform the operations in a module called SalesModule.

function additional(a,b){return a+b}

function sub(a,b){return a-b}
function multi(a,b){return a*b}
function div(a,b){return a/b}

export {additional,sub,multi,div}