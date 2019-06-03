function cals(val){
    document.getElementById('display').value =val;
}
function evals(val){
    document.getElementById('display').value+=val;
}

function result() {
    try{
        cals(eval(document.getElementById('display').value))
    }
    catch(e){
        cals('Error')
    }
    
}