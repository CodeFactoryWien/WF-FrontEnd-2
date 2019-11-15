counter = 0;
$(document).ready(function() {
    $(".container").on('click', '#next', function() {
        counter++;
        console.log(counter)
        if (counter == 0) {
            $(".change").attr("src", "#")
        }



        if (counter == 1) {
            $(".change").attr({
                src: "./img/lugi.gif",
                width: "50%",
                height: "50%"
            })
        }
        if (counter == 2) {
            $(".change").attr({
                src: "./img/sonic.gif",
                width: "50%",
                height: "50%"
            })
        }
        if (counter == 3) {
            $(".change").attr({
                src: "./img/joshi.gif",
                width: "50%",
                height: "50%"
            })
        }
        if (counter == 4) {
            $(".change").attr({
                src: "./img/ceo.gif",
                width: "50%",
                height: "50%"
            })
        }
        
         if (counter == 5) {
            $(".change").attr({
                src: "./img/start.png",
                width: "50%",
                height: "70%"
            })
        }
             
      
        if (counter == 6) {
            $(".change").attr({
                src: "./img/work.gif",
                width: "50%",
                height: "50%"
            })
        }  
         if (counter == 7) {
            $(".change").attr({
                src: "./img/firebase.png",
                width: "50%",
                height: "50%"
            })
        }
          if (counter == 8) {
            $(".change").attr({
                src: "./img/components.png",
                 width: "73%",
                height: "70%"
            })
        }
        if (counter == 9) {
            $(".change").attr({
                src: "./img/pagelayout.png",
                width: "73%",
                height: "70%"
            })
        } 
       
        if (counter == 10) {
            $(".change").attr({
                src: "./img/day2.png",
                 width: "73%",
                height: "70%"
            })
        }
       
         if (counter == 11) {
            $(".change").attr({
                src: "./img/problem.gif",
                width: "50%",
                height: "50%"
            })
        }
         if (counter == 12) {
            $(".change").attr({
                src: "./img/data.png",
                width: "50%",
                height: "50%"
            })
        }
         if (counter == 13) {
            $(".change").attr({
                src: "./img/service.png",
                width: "50%",
                height: "50%"
            })
        }

         if (counter == 14) {
            $(".change").attr({
                src: "./img/day3.png",
                width: "50%",
                height: "50%"
            })
        }
         if (counter == 15) {
            $(".change").attr({
                src: "./img/login.gif",
                width: "50%",
                height: "50%"
            })
        }
         if (counter == 16) {
            $(".change").attr({
                src: "./img/day4.png",
                width: "50%",
                height: "50%"
            })
        }
         if (counter == 17) {
            $(".change").attr({
                src: "./img/login1.gif",
                width: "50%",
                height: "50%"
            })
        }
         if (counter == 18) {
            $(".change").attr({
                src: "./img/style.gif",
                width: "50%",
                height: "50%"
            })
        }
        if (counter == 19) {
            $(".change").attr({
                src: "./img/end.png",
                width: "50%",
                height: "50%"
            })
        }
        if (counter == 20) {

            $(".change").attr({
                src: "./img/thanks.gif",
                width: "50%",
                height: "50%"
            })
            
        }
        if (counter > 20){
             $(".change").attr("src", "#")
             counter = 0;
        }


    });
    $(".container").on('click', '#prev', function() {
        counter--;
        console.log(counter)
        if(counter < 0){
             $(".change").attr({
                src: "./img/thanks.gif",
                width: "50%",
                height: "50%"

            })
            counter = 20;

        }
             if (counter == 0) {
            $(".change").attr("src", "#")
            counter = 20;
        }



        if (counter == 1) {
            $(".change").attr({
                src: "./img/lugi.gif",
                width: "50%",
                height: "50%"
            })
        }
        if (counter == 2) {
            $(".change").attr({
                src: "./img/sonic.gif",
                width: "50%",
                height: "50%"
            })
        }
        if (counter == 3) {
            $(".change").attr({
                src: "./img/joshi.gif",
                width: "50%",
                height: "50%"
            })
        }
        if (counter == 4) {
            $(".change").attr({
                src: "./img/ceo.gif",
                width: "50%",
                height: "50%"
            })
        }
        
         if (counter == 5) {
            $(".change").attr({
                src: "./img/start.png",
                width: "50%",
                height: "70%"
            })
        }
             
      
        if (counter == 6) {
            $(".change").attr({
                src: "./img/work.gif",
                width: "50%",
                height: "50%"
            })
        }  
         if (counter == 7) {
            $(".change").attr({
                src: "./img/firebase.png",
                width: "50%",
                height: "50%"
            })
        }
          if (counter == 8) {
            $(".change").attr({
                src: "./img/components.png",
                 width: "73%",
                height: "70%"
            })
        }
        if (counter == 9) {
            $(".change").attr({
                src: "./img/pagelayout.png",
                width: "73%",
                height: "70%"
            })
        } 
       
        if (counter == 10) {
            $(".change").attr({
                src: "./img/day2.png",
                 width: "73%",
                height: "70%"
            })
        }
       
         if (counter == 11) {
            $(".change").attr({
                src: "./img/problem.gif",
                width: "50%",
                height: "50%"
            })
        }
         if (counter == 12) {
            $(".change").attr({
                src: "./img/data.png",
                width: "50%",
                height: "50%"
            })
        }
         if (counter == 13) {
            $(".change").attr({
                src: "./img/service.png",
                width: "50%",
                height: "50%"
            })
        }

         if (counter == 14) {
            $(".change").attr({
                src: "./img/day3.png",
                width: "50%",
                height: "50%"
            })
        }
         if (counter == 15) {
            $(".change").attr({
                src: "./img/login.gif",
                width: "50%",
                height: "50%"
            })
        }
         if (counter == 16) {
            $(".change").attr({
                src: "./img/day4.png",
                width: "50%",
                height: "50%"
            })
        }
         if (counter == 17) {
            $(".change").attr({
                src: "./img/login1.gif",
                width: "50%",
                height: "50%"
            })
        }
         if (counter == 18) {
            $(".change").attr({
                src: "./img/style.gif",
                width: "50%",
                height: "50%"
            })
        }
        if (counter == 19) {
            $(".change").attr({
                src: "./img/end.png",
                width: "50%",
                height: "50%"
            })
        }
        if (counter == 20) {
            $(".change").attr({
                src: "./img/thanks.gif",
                width: "50%",
                height: "50%"

            })
        }
        


    });
});