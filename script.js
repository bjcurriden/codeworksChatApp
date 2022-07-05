$(document).ready(() => {
    let counter = 0;
    // code inspired by WebStylePress Simple Chat Box Simulation using jQuery | jQuery Tutorial
    $('form').submit(function (e) {

        e.preventDefault();

        let getMessage = $('input').val();

        if (getMessage) {

            let newMessage = "<p class = 'message'>" + getMessage + '<span class = "time">' + '<br>' + theTime[4] + '</span>' + "</p>";

            $('.msgBox .inner').append(newMessage);
            //create a loop with a counter where if the counter is below a certain number
            //it responds in order, otherwise, it'll start throwing out random responses
            const randomNumber = Math.floor(Math.random() * (20 - 10 + 1)) + 10


            let chatResponse = ''

            if (counter <= 10) {
                chatResponse = "<p class = 'robotmessage'>" + getResponse(counter) + '<span class = "robotTime">' + '<br>' + theTime[4] + '</span>' + "</p>";
                $('.msgBox .inner').append(chatResponse);
            } else {
                chatResponse = "<p class = 'robotmessage'>" + getResponse(randomNumber) + '<span class = "robotTime">' + '<br>' + theTime[4] + '</span>' + "</p>"
                $('.msgBox .inner').append(chatResponse);
            }


            $('input').val('')

            $('.msgBox').scrollTop($('.msgBox')[0].scrollHeight)
        }
        counter++
    })

})

const getResponse = (num) => {
    switch (num) {
        case 0:
            return 'Hello! How are you?'
            break;
        case 1:
            return "That's great to hear. Nice weather we're having, eh?"
            break;
        case 2:
            return "That's how I feel about the weather, too!"
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
            return "HIDEY HOOO"
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
            return 'AHHHHHHHHHHHHHHH<br>HHHHHHHHHHHHHHHH<br>!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
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

let theTime = new Date().toString().split(' ')
