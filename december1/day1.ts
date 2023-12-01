const decoder = new TextDecoder("utf-8");
const data = Deno.readFileSync("input.txt");
const lines = decoder.decode(data).split("\n");
let sum = 0;
lines.forEach(line => {

    const arrStr = new Array<string>();

    for(let i = 0; i < line.length; i++){
        line = line.replaceAll("one","o1e").replaceAll("two","t2o").replaceAll("three","t3e").replaceAll("four","f4r").replaceAll("five","f5e").replaceAll("six","s6x").replaceAll("seven","s7n").replaceAll("eight","e8t").replaceAll("nine","n9e");
        if(!isNaN(parseInt(line.charAt(i)))){
            arrStr.push(line.charAt(i));
        }   
    }

    if(arrStr.length > 2){
        arrStr.splice(1,arrStr.length - 2);
    }
    else if(arrStr.length === 1){
        arrStr.push(arrStr[0]);
    }

    sum += parseInt(arrStr[0] + arrStr[1])
});

console.log(sum);