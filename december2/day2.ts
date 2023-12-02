const decoder = new TextDecoder("utf-8");
const data = Deno.readFileSync("input.txt");
const lines = decoder.decode(data).split("\n");
const games = new Array<string>();
const bag = [12,13,14]
const possibles = new Array<number>();
const powers = new Array<number>();
let i = 1;
lines.forEach(line => {
games.push(line.split(":")[1].replaceAll(" ","").replaceAll("red","r").replaceAll("green","g").replaceAll("blue","b").replaceAll("\r","").replaceAll(";",","));
})

games.forEach(game => {
    const pulls = game.split(",");
    const biggestPull = new Map<string,number>();
    biggestPull.set("r",0);
    biggestPull.set("g",0);
    biggestPull.set("b",0);
    //console.log(pulls);
    pulls.forEach(pull =>{
        let color : string;
        let num : number;
        if(!isNaN(parseInt(pull[1]))){
            color = pull[2]
            num = parseInt(pull[0] + pull[1]);
        }
        else{
            color = pull[1]
            num = parseInt(pull[0])
        }
        switch(color){
            case "r":
                if(num > biggestPull.get("r")!)
                    biggestPull.set("r",num);
                break;
            case "g":
                if(num > biggestPull.get("g")!)
                    biggestPull.set("g",num);
                break;
            case "b":
                if(num > biggestPull.get("b")!)
                    biggestPull.set("b",num);
                break;
        }
    })
    powers.push(biggestPull.get("r")! * biggestPull.get("g")! * biggestPull.get("b")!)

    if(biggestPull.get("r")! <= bag[0] && biggestPull.get("g")! <= bag[1] && biggestPull.get("b")! <= bag[2])
        possibles.push(i)

    i++;
})

let sum = 0;
possibles.forEach(id =>{
    sum += id;
})
let sumPower = 0;
powers.forEach(pow =>{
    sumPower += pow;
})

console.log("Sum of possible games : " + sum)
console.log("Sum of the power of each game : " + sumPower)