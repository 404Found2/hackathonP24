var localGoalArray = JSON.parse(localStorage.getItem('userGoal'));
start = localGoalArray[2];
end = localGoalArray[1];
goal = localGoalArray[0];

var localFeedArray = JSON.parse(localStorage.getItem('feed'));
stocksNum = localFeedArray[0];
realEstateNum = localFeedArray[1];
businessNum = localFeedArray[2];
bondsNum = localFeedArray[3];
royaltiesNum = localFeedArray[4];
otherNum = localFeedArray[5]

function bypass() {
    usernameField = document.getElementById("usernameData");
    passwordField = document.getElementById("passwordData");
    emailField = document.getElementById("emailData");
    logout = document.getElementById("logout");


    logout.addEventListener("click", logOff);

    function logOff() {
        localStorage.removeItem("feed");
        localStorage.removeItem("userKey");
    }

    usernameField.innerHTML = username;
    emailField.innerHTML = email;

    togglePassword = document.getElementById("togglePass");
    togglePassword.addEventListener("click", switchPass);

    function switchPass() {
        if (togglePassword.classList.contains("fa-eye")) {
            togglePassword.classList.remove("fa-eye");
            togglePassword.classList.add("fa-eye-slash");
            var hidden = password.replace(/[a-zA-z0-9]/g, '●');
            passwordField.innerHTML = hidden;
        } else if (togglePassword.classList.contains("fa-eye-slash")) {
            togglePassword.classList.remove("fa-eye-slash");
            togglePassword.classList.add("fa-eye");
            passwordField.innerHTML = password;
        }
    }

    startElement = document.getElementById("startYearData")
    endElement = document.getElementById("endYearData")
    goalElement = document.getElementById("goalAmountData")

    goalElement.innerHTML = goal;
    endElement.innerHTML = end;
    startElement.innerHTML = start;

    var arrayOfGoals = [goal, end, start];
    arrayOfGoals = JSON.stringify(arrayOfGoals)
    localStorage.setItem('userGoal', arrayOfGoals);


    stocksElement = document.getElementById("stocksData")
    bondsElement = document.getElementById("bondsData")
    realEstateElement = document.getElementById("landData")
    businessElement = document.getElementById("storeData")
    royaltiesElement = document.getElementById("booksData")
    otherElement = document.getElementById("otherData")

    stocksElementFace = document.getElementById("stocksFace")
    bondsElementFace = document.getElementById("bondsFace")
    realEstateElementFace = document.getElementById("landFace")
    businessElementFace = document.getElementById("storeFace")
    royaltiesElementFace = document.getElementById("booksFace")
    otherElementFace = document.getElementById("otherFace")



    stocksElement.value = stocksNum;
    changeFace(stocksElement, stocksElementFace);
    bondsElement.value = bondsNum;
    changeFace(bondsElement, bondsElementFace);
    realEstateElement.value = realEstateNum;
    changeFace(realEstateElement, realEstateElementFace);
    businessElement.value = businessNum;
    changeFace(businessElement, businessElementFace);
    royaltiesElement.value = royaltiesNum;
    changeFace(royaltiesElement, royaltiesElementFace);
    otherElement.value = otherNum;
    changeFace(otherElement, otherElementFace);

    var arrayOfFeed = [stocksNum, bondsNum, realEstateNum, businessNum, royaltiesNum, otherNum];
    localStorage.setItem('feed', JSON.stringify(arrayOfFeed));

    function changeFace(htmlElement, faceElement) {
        if (htmlElement.value < 5) {
            faceElement.classList.remove("fa-face-smile");
            faceElement.classList.remove("fa-face-meh");
            faceElement.classList.add("fa-face-frown");
        } else if (htmlElement.value < 8) {
            faceElement.classList.remove("fa-face-smile");
            faceElement.classList.remove("fa-face-frown");
            faceElement.classList.add("fa-face-meh");
        } else {
            faceElement.classList.remove("fa-face-meh");
            faceElement.classList.remove("fa-face-frown");
            faceElement.classList.add("fa-face-smile");
        }
    }
}

function updateDatas() {
    $.ajax({
        type: 'POST',
        url: '../php/bypassSignIn.php',
        data: {
            userID: localStorage.getItem('userKey'),
        },
        success: function (res) {
            var data = JSON.parse(res);
            if (data.error) {
                return;
            }
            var arrayFromServer = JSON.parse(data.dataArray);
            username = arrayFromServer[0];
            password = arrayFromServer[1];
            email = arrayFromServer[2];

            bypass();
        }
    });

};