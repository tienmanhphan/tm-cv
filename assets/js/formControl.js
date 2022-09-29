// Get data from sever

// Render about infomation
var xhttp = new XMLHttpRequest();
xhttp.open('GET', 'https://632d7eda519d17fb53bf6364.mockapi.io/get_info')
xhttp.onload = function () {
    var file = JSON.parse(xhttp.responseText);
    render(file);
}
xhttp.send();
function render(data) {
    var aboutInfo = $(".about-info-render")
    let htmls = ''
    for (let i = 0; i < data[0].info_name.length; i++) {
        htmls += `<div class="info-dt">
        <p>${data[0].info_name[i]}</p>
        <span>${data[0].value[i]}</span>
    </div>`
    }
    aboutInfo.html(htmls)

}
// Render experience information
var yhttp = new XMLHttpRequest();
yhttp.open('GET', 'https://632d7eda519d17fb53bf6364.mockapi.io/get_work_history')
yhttp.onload = function () {
    var file = JSON.parse(yhttp.responseText);
    renderExp(file);
}
yhttp.send();
function renderExp(data) {
    var expLeft = $(".exp-render-left")
    var expRight = $(".exp-render-right")
    let htmlLeft = ''
    for (let i = 0; i < 2; i++) {
        htmlLeft += `<div class="exp-item " data-aos="fade-up" data-aos-delay="${(i + 1) * 400}">
        <h3>${data[0].position[i]}</h3>
        <span>${data[0].duration[i]}</span>
        <h4>${data[0].company[i]}</h4>
        <p>${data[0].description[i]}<br>
        </p>
    </div>`
    }
    let htmlRight = `<div class="exp-item " data-aos="fade-up" data-aos-delay="1200">
    <h3>${data[0].position[2]}</h3>
    <span>${data[0].duration[2]}</span>
    <h4>${data[0].company[2]}</h4>
    <p>${data[0].description[2]}<br>
    </p>
</div>`
    expLeft.html(htmlLeft)
    expRight.html(htmlRight)
}
// Click submit button handle
var SubmitButton = $("#submit-btn")

SubmitButton.bind('click', function ContactMe() {
    var name = $("#input-name").val()
    var email = $("#input-email").val()
    var subject = $("#input-subject").val()
    var message = $("#input-message").val()

    var sendInfo = {
        Name: name,
        Email: email,
        Subject: subject,
        Message: message
    }


    $.ajax({
        type: "POST",
        url: "https://632d7eda519d17fb53bf6364.mockapi.io/post_contact",

        success: function (msg) {
            console.log(msg);

        },
        error: function (message) {
            console.error(message);

        },
        data: sendInfo,
        dataType: "json",

    });
})