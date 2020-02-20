module.exports = function toReadable (number) {
    const First = {
        0:'',
        1:'one',
        2:'two',
        3:'three',
        4:'four',
        5:'five',
        6:'six',
        7:'seven',
        8:'eight',
        9:'nine',

    }
    const Second ={
        10:'ten',
        11:'eleven',
        12:'twelve',
        13:'thirteen',
        14:'fourteen',
        15:'fifteen',
        16:'sixteen',
        17:'seventeen',
        18:'eighteen',
        19:'nineteen',
        20:'twenty',
        30:'thirty',
        40:'forty',
        50:'fifty',
        60:'sixty',
        70:'seventy',
        80:'eighty',
        90:'ninety',
    }
    const Third = {
        100:'one hundred',
        200:'two hundred',
        300:'three hundred',
        400:'four hundred',
        500:'five hundred',
        600:'six hundred',
        700:'seven hundred',
        800:'eight hundred',
        900:'nine hundred',
    }
    if(number === 0) {
        return 'zero';
    }
    if(number<10){
        return First[number];
    }
    if(number >9 && number <100){
        if(number <20){
            return Second[number];
        }
        else{
            if(number%10===0){
                return Second[number]
            }
            else{
                let n = number%10;
                number -=n;
                return Second[number] + " " + First[n];
            }
        }
    }
    if(number>99 && number <1000){
        if(number%100 === 0){
            return Third[number];
        }
        else{
            if(number%10 === 0){
                let n = number%100;
                number -= n;
                return Third[number]+" "+Second[n]

            }
            else{
                if(number%100<10){
                    let num = number%100;
                    number-= num;
                    return Third[number] + " " + First[num];
                }
                if(number%100<20){
                    let num = number%100;
                    number-= num;
                    return Third[number] + " " + Second[num];
                }
                if(number%100>20 && number%100<100)
                var num = number%10;
                number-=num;
                let num2 = number%100;
                number-=num2;
                return Third[number] + " " + Second[num2]+ " " + First[num];
            }
        }
    }

}
