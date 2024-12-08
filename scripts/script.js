// Form submission handler
document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    const userName = document.getElementById("userName").value.trim();
    const userCity = document.getElementById("userCity").value.trim();
    const userPhone = document.getElementById("userPhone").value.trim();
    const message = document.getElementById("message").value.trim();

  emailjs.init("s-606DxpRNfZIUBMU");

    if (!userName || !userCity || !userPhone) {
        alert("Пожалуйста, заполните все поля: имя, город и номер телефона.");
        return;
    }

    const emailParams = {
      from_email: "test@gmail.com", 
      to_email: "83553754yantar45@gmail.com",
      message: `
            phone-number: ${userPhone}
            name: ${userName}
            city: ${userCity}
            user-message: ${message}
        `
    };

    emailjs.send("service_df7f5am", "template_x76z268", emailParams) 
        .then(function(response) {
            alert("Сообщение отправлено");
            document.getElementById("emailForm").reset();
        }, function(error) {
            alert("Не удалось отправить сообщение: " + error.text);
        });
});
