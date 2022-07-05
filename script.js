$(document).ready(() => {
    $('.msgBox').show()

    // code inspired by WebStylePress Simple Chat Box Simulation using jQuery | jQuery Tutorial
    $('form').submit(function (e) {

        e.preventDefault();

        let getMessage = $('input').val();

        if (getMessage) {

            let newMessage = "<p class = 'message'>" + getMessage + '<span class = "time">' + '<br>' + theTime[4] + '</span>' + "</p>";

            $('.msgBox .innerLeft').append(newMessage);
            //create a loop with a counter where if the counter is below a certain number
            //it responds in order, otherwise, it'll start throwing out random responses
            const randomNumber = Math.floor(Math.random() * 3)
            let chatResponse = "<p class = 'robotmessage'>" + getResponse(randomNumber) + '<span class = "robotTime">' + '<br>' + theTime[4] + '</span>' + "</p>"
            $('.msgBox .innerRight').append(chatResponse);


            $('input').val('')

            $('.msgBox').scrollTop($('.msgBox')[0].scrollHeight)
        }
    })
})

const getResponse = (ranNum) => {
    switch (ranNum) {
        case 1:
            return 'hello'
            break;
        case 2:
            return 'goodby'
            break;
        case 0:
            return 'oh boy'
            break;
    }
}

let theTime = new Date().toString().split(' ')


