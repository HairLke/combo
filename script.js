let x = +prompt( `Enter the number to multipli  `, `from 1 to 100` )
let y = +prompt( `Enter the number to add`, `from 1 to 100` )
function    search(target) {
   
    function find(current, history)  {
        if(current===target){
           return history         
        } else if(current>target){
            return null
        }else {
            return find(current +y  ,(`${history}+${y}`))||
            find(current*x  ,(`${history}*${x}`))
        }
        
    }
    return find(1, `1`)
}
console.log(search(18));

    
