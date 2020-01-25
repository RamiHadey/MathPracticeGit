var doc1 = document.getElementById("first");
var doc2 = document.getElementById("second");
var doc3 = document.getElementById("third");
var doc4 = document.getElementById("fourth");
var doc5 = document.getElementById("fifth");
var doc6 = document.getElementById("sixth");
var output = document.getElementById("output");

function mean(){
    var first = parseFloat(doc1.value); 
    var second = parseFloat(doc2.value); 
    var third = parseFloat(doc3.value); 
    var fourth = parseFloat(doc4.value); 
    var fifth = parseFloat(doc5.value); 
    var sixth = parseFloat(doc6.value);
    var meanTotal =  (first + second + third + fourth + fifth + sixth)/6;
    output.innerHTML = "the mean of the numbers is " + meanTotal;

}

function smallest(){
    var first = parseFloat(doc1.value); 
    var second = parseFloat(doc2.value); 
    var third = parseFloat(doc3.value); 
    var fourth = parseFloat(doc4.value); 
    var fifth = parseFloat(doc5.value); 
    var sixth = parseFloat(doc6.value);
    var smallest = Math.min(first, second, third, fourth, fifth, sixth);
    output.innerHTML = "The smallest number is " + smallest;
}


function largest(){
    var first = parseFloat(doc1.value); 
    var second = parseFloat(doc2.value); 
    var third = parseFloat(doc3.value); 
    var fourth = parseFloat(doc4.value); 
    var fifth = parseFloat(doc5.value); 
    var sixth = parseFloat(doc6.value);
    var largest = Math.max(first, second, third, fourth, fifth, sixth);
    output.innerHTML = "The largest number is " + largest;
}

function range(){
    var first = parseFloat(doc1.value); 
    var second = parseFloat(doc2.value); 
    var third = parseFloat(doc3.value); 
    var fourth = parseFloat(doc4.value); 
    var fifth = parseFloat(doc5.value); 
    var sixth = parseFloat(doc6.value);
    var range = (Math.max(first, second, third, fourth, fifth, sixth) -  Math.min(first, second, third, fourth, fifth, sixth));
    output.innerHTML = "The Range is " + range;
}



function order(){
    var first = parseFloat(doc1.value); 
    var second = parseFloat(doc2.value); 
    var third = parseFloat(doc3.value); 
    var fourth = parseFloat(doc4.value); 
    var fifth = parseFloat(doc5.value); 
    var sixth = parseFloat(doc6.value);

    var one = 0;
    var two = 0;
    var three = 0;
    var four = 0;
    var five = 0;
    var six = 0;

    one = Math.min(first, second, third, fourth, fifth, sixth);

    if(one === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }

    else if(one === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }

    else if(one === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }

    else if(one = fourth){
        fourth = fifth;
        fifth = sixth;
    }
    else if(one = fifth){
        fifth = sixth;
    }


    two = Math.min(first, second, third, fourth, fifth);

    if(two === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
    }

    else if(two === second){
        second = third;
        third = fourth;
        fourth = fifth;
    }

    else if(two === third){
        third = fourth;
        fourth = fifth;
    }

    else if(two = fourth){
        fourth = fifth;
    }


    three = Math.min(first, second, third, fourth);

    if(three === first){
        first = second;
        second = third;
        third = fourth;
    }

    else if(three === second){
        second = third;
        third = fourth;
    }

    else if(three === third){
        third = fourth;
    }


    four = Math.min(first, second, third);

    if(four === first){
        first = second;
        second = third;
    }

    else if(four === second){
        second = third;
    }


    five = Math.min(first, second);

    if(five === first){
        first = second;
    }

    six = first;


    output.innerHTML = "the numbers least to greatest are " + one + " " + two + " " + three + " " + four + " " + five + " " + six;

}


function Mode(){
    var one = parseFloat(doc1.value); 
    var two = parseFloat(doc2.value); 
    var three = parseFloat(doc3.value); 
    var four = parseFloat(doc4.value); 
    var five = parseFloat(doc5.value); 
    var six = parseFloat(doc6.value);


    var n1 = 1;
    var n2 = 1;
    var n3 = 1;
    var n4 = 1;
    var n5 = 1;
    var n6 = 1;


    if (one === two){
        n1 ++;
    }
    if (one === three){
        n1 ++;
    }
    if (one === four){
        n1 ++;
    }
    if (one === five){
        n1 ++;
    }
    if (one === six){
        n1 ++;
    }


    if (two === three){
        n2 ++;
    }
    if (two === four){
        n2 ++;
    }
    if (two === five){
        n2 ++;
    }
    if (two === six){
        n2 ++;
    }



    if (three === four){
        n3 ++;
    }
    if (three === five){
        n3 ++;
    }
    if (three === six){
        n3 ++;
    }


    if (four === five){
        n4 ++;
    }
    if (four === six){
        n4 ++;
    }


    if (five === six){
        n5 ++;
    }

    var max = Math.max(n1, n2, n3, n4, n5, n6);
    if(max === n1){
        output.innerHTML = "mode is " + one + " and it appeared " + max + " number of times"; 
    }
    else if(max === n2){
        output.innerHTML = "mode is " + two + " and it appeared " + max + " number of times"; 
    }
    else if(max === n3){
        output.innerHTML = "mode is " + three + " and it appeared " + max + " number of times"; 
    }
    else if(max === n4){
        output.innerHTML = "mode is " + four + " and it appeared " + max + " number of times"; 
    }
    else if(max === n5){
        output.innerHTML = "mode is " + five + " and it appeared " + max + " number of times"; 
    }
    else if(max === n6){
        output.innerHTML = "mode is " + six + " and it appeared " + max + " number of times"; 
    }


}

function middle(){
    var first = parseFloat(doc1.value); 
    var second = parseFloat(doc2.value); 
    var third = parseFloat(doc3.value); 
    var fourth = parseFloat(doc4.value); 
    var fifth = parseFloat(doc5.value); 
    var sixth = parseFloat(doc6.value);

    var one = 0;
    var two = 0;
    var three = 0;
    var four = 0;
    var five = 0;
    var six = 0;

    one = Math.min(first, second, third, fourth, fifth, sixth);

    if(one === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }

    else if(one === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }

    else if(one === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }

    else if(one = fourth){
        fourth = fifth;
        fifth = sixth;
    }
    else if(one = fifth){
        fifth = sixth;
    }


    two = Math.min(first, second, third, fourth, fifth);

    if(two === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
    }

    else if(two === second){
        second = third;
        third = fourth;
        fourth = fifth;
    }

    else if(two === third){
        third = fourth;
        fourth = fifth;
    }

    else if(two = fourth){
        fourth = fifth;
    }


    three = Math.min(first, second, third, fourth);

    if(three === first){
        first = second;
        second = third;
        third = fourth;
    }

    else if(three === second){
        second = third;
        third = fourth;
    }

    else if(three === third){
        third = fourth;
    }


    four = Math.min(first, second, third);

    if(four === first){
        first = second;
        second = third;
    }

    else if(four === second){
        second = third;
    }


    five = Math.min(first, second);

    if(five === first){
        first = second;
    }

    six = first;

    var midde = (three + four) / 2;
    output.innerHTML = "The two middle terms are " + three + " and " + four + ", so the median is " + midde;
    if(output.innerHTML === "The two middle terms are NaN and NaN, so the median is NaN"){
        output.innerHTML = "You did not input in all spaces!"
    }
}