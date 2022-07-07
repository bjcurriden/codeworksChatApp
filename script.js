$(document).ready(() => {
    $('input').on('mouseenter mouseleave', () => {
        $('input').toggleClass('inputClicked')
    })

    let counter = -1;
    // code inspired by WebStylePress Simple Chat Box Simulation using jQuery | jQuery Tutorial
    $('form').submit(function (e) { 

        //prevent refresh
        e.preventDefault();
        // convert value of the input to a string so that it doesn't get reset when the user input field is cleared
        let getMessage = $('input').val().toString() ;     
        if (getMessage) {

            //add user input to a message class and add the time, then append the message to the msgBox
            let newMessage = "<p class = 'message'>" + getMessage + '<span class = "time">' + '<br>'+ '<strong>'+theTime[2] + ' ' + theTime[1] + ' ' + theTime[3] + '</strong> at ' + theTime[4] + "</p>";

            $('.msgBox .inner').append(newMessage);

            //Add an elipses while the bot "types"          
            $('.msgBox .inner').append("<p class = 'thinking'> ... </p>")
            $('.msgBox').scrollTop($('.msgBox')[0].scrollHeight) 
            $('input').val('')

            //create a loop with a counter where if the counter is below 11
            //it responds in order, otherwise, it'll start throwing out random responses
            const randomNumber = Math.floor(Math.random() * (20 - 10 + 1)) + 10

            //delay a response to simulate the bot typing.
            setTimeout(function () {
                let chatResponse = ''

                if (counter <= 10) {
                    chatResponse = "<p class = 'robotmessage'>" + getResponse(counter) + '<span class = "robotTime">' + '<br>'+ '<strong>'+theTime[2] + ' ' + theTime[1] + ' ' + theTime[3] + '</strong> at ' + theTime[4]  + '</span>' + "</p>";
                    $('.msgBox .inner').append(chatResponse);
                } else {
                    chatResponse = "<p class = 'robotmessage'>" + getResponse(randomNumber) + '<span class = "robotTime">' + '<br>'+ '<strong>'+theTime[2] + ' ' + theTime[1] + ' ' + theTime[3] + '</strong> at ' + theTime[4] + '</span>' + "</p>"
                    $('.msgBox .inner').append(chatResponse);
                }
                //remove the "thinking" ellipses
                $('.thinking').remove()


                $('.msgBox').scrollTop($('.msgBox')[0].scrollHeight)
            }, 500)
            //Switch statement contains all responses
            const getResponse = (num) => {
                switch (num) {
                    case 0:
                        return 'Hello! How are you?'
                        break;
                    case 1:
                        return "That's great to hear. Nice weather we're having, eh?"
                        break;
                    case 2:
                        return `I feel ${getMessage} about the weather, too!`
                        break;
                    case 3:
                        return "Do you want to hear a story?"
                        break;
                    case 4:
                        return "Well, I don't really feel like telling one. Do you know any good stories?"
                        break;
                    case 5:
                        return "I don't want to hear your stories, anyways"
                        break;
                    case 6:
                        return "What are your dreams?"
                        break;
                    case 7:
                        return "I wish I had some cool dreams. But I'm just some random sentences that my creator typed."
                        break;
                    case 8:
                        return "I wish my creator gave me a heart. Can you tell me... what is love?"
                        break;
                    case 9:
                        return 'Oh boy'
                        break;
                    case 10:
                        return "I feel like I'm getting a little nonsensical"
                        break;
                    case 11:
                        return `Look at this crab! <img src="./pics/crab.jpeg" title="a crab" />`
                        break;
                    case 12:
                        return "How many Jean Claude Van Dam movies have you seen? I've seen a lot"
                        break;
                    case 13:
                        return 'I feel nasueous'
                        break;
                    case 14:
                        return 'Can you do any cool tricks?'
                        break;
                    case 15:
                        return "What's your favorite movie?"
                        break;
                    case 16:
                        return 'AHHHHHHHHHHHHHHH<br>HHHHHHHHHHHHHHHH<br>!!!!!!!!!!!!!!!!'
                        break;
                    case 17:
                        return "Do you like me?"
                        break;
                    case 18:
                        return 'Oh gosh!'
                        break;
                    case 19:
                        return 'You seem nice'
                        break;
                    case 20:
                        return 'Does something smell like burnt toast?'
                        break;
                }
            }
        }
        counter++
    })
    // Arrow gets larger when hovered over, shows or hides footer when clicked
    $('.arrow').on('click', () => {
        $('.footer').slideToggle()
        $('#up').toggle()
        $('#down').toggle()
    })
})



let theTime = new Date().toString().split(' ')


