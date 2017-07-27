let myObject=function () {}

myObject.prototype.hrMessage = function(){
    console.log('This message is from HR Synechron Team!');
}

myObject.prototype.accountMessage = function(a=''){
    console.log('This message is from ACCOUNT Synechron Team!'+a);
}

myObject.prototype.adminMessage = function(){
    console.log('This message is from ADMIN Synechron Team!');
}

//module.exports = new myObject();


module.exports.mySynObject = new myObject();