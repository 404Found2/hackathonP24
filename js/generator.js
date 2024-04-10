////////////////ADDING INCOME SOURCES//////////////////

addIncome = document.getElementById("addIncome");
deleteIncome = document.getElementById("deleteIncome");

incomeTable = document.querySelector("#income-datas");
expenseTable = document.querySelector("#expense-datas");

addIncome.addEventListener("click", openClose);
deleteIncome.addEventListener("click", deleteRow);

function openClose() {
    eventForm = document.getElementById("eventForm1");
    eventForm.style.display = "unset";
    eventForm.style.display = "block";

    confirmIncome = document.getElementById("confirm-add-income");
    confirmIncome.addEventListener("click", addData);

}

function deleteRow() {
    eventForm = document.getElementById("eventForm1.1");
    eventForm.style.display = "unset";
    eventForm.style.display = "block";

    confirmIncomeDelete = document.getElementById("confirm-delete-income");
    confirmIncomeDelete.addEventListener("click", deleteData);
}

function addData() {
    eventForm = document.getElementById("eventForm1");
    var names = document.getElementById("name-1");
    var initial = document.getElementById("initial-1");
    var monthly = document.getElementById("monthly-1");
    var growth = document.getElementById("growth-1");

    incomeTable.innerHTML += `<tr>
                            <td contenteditable='true'>${names.value}</td>
                            <td contenteditable='true' class="initialI">${initial.value}</td>
                            <td contenteditable='true' class="monthlyI">${monthly.value}</td>
                            <td contenteditable='true' class="growthI">${growth.value}</td>
                        </tr>`;

    eventForm.style.display = "none";
}

function deleteData() {
    eventForm = document.getElementById("eventForm1.1");
    var rowNum = document.getElementById("rowNum-1.1").value;
    incomeTable.deleteRow((rowNum - 1));
    eventForm.style.display = "none";
}


////////////////ADDING EXPENSE SOURCES//////////////////

addExpense = document.getElementById("addExpense");
deleteExpense = document.getElementById("deleteExpense");

expenseTable = document.querySelector("#expense-datas");

addExpense.addEventListener("click", openCloseE);
deleteExpense.addEventListener("click", deleteRowE);

function openCloseE() {
    eventForm = document.getElementById("eventForm2");
    eventForm.style.display = "unset";
    eventForm.style.display = "block";

    confirmExpense = document.getElementById("confirm-add-expense");
    confirmExpense.addEventListener("click", addDataE);

}

function deleteRowE() {
    eventForm = document.getElementById("eventForm2.1");
    eventForm.style.display = "unset";
    eventForm.style.display = "block";

    confirmIncomeDelete = document.getElementById("confirm-delete-expense");
    confirmIncomeDelete.addEventListener("click", deleteDataE);
}

function addDataE() {
    eventForm = document.getElementById("eventForm2");
    var names = document.getElementById("name-2");
    var initial = document.getElementById("initial-2");
    var monthly = document.getElementById("monthly-2");
    var growth = document.getElementById("growth-2");
    var valued = document.getElementById("value-2");

    expenseTable.innerHTML += `<tr>
                            <td contenteditable='true'>${names.value}</td>
                            <td contenteditable='true' class="initialE">${initial.value}</td>
                            <td contenteditable='true' class="monthlyE">${monthly.value}</td>
                            <td contenteditable='true' class="growthE">${growth.value}</td>
                            <td contenteditable='true' class="valueE">${valued.value}</td>
                        </tr>`;

    eventForm.style.display = "none";
}

function deleteDataE() {
    eventForm = document.getElementById("eventForm2.1");
    var rowNum = document.getElementById("rowNum-2.1").value;
    expenseTable.deleteRow((rowNum - 1));
    eventForm.style.display = "none";
}


/////////////////////////////GRAPH THE DATA //////////////////////////
genButton = document.getElementById('createChart');
const ctx = document.getElementById('myGraph');

genButton.addEventListener("click", drawChart)

let profitFunc = [];
let expenseFunc = [];
let goal = [];
let netWorth = [];

startYear = document.getElementById("startyr")
endYear = document.getElementById("endyr")
goalMoney = document.getElementById("goal-money")
debug = document.getElementById("debugger")

async function drawChart() {
    profitFunc = [];
    expenseFunc = [];
    goal = [];
    netWorth = [];

    drawIt();
    await calculateProfitFunct();
    await calculateExpenseFunct();

    console.table(profitFunc);
    console.table(expenseFunc);
}

async function calculateYears() {
    const years = [];
    for (let i = startYear.value; i <= endYear.value; i++) {
        years[(i - startYear.value)] = i;
        goal.push(goalMoney.value);

        let inm = await getProfit((i - startYear.value));
        let out = await getExpense((i - startYear.value));
        netWorth.push((inm - out));
    }

    netWorth[0] = await getProfit((0)) - await getExpense((0));
    return years;
}

async function calculateProfitFunct() {
    var initial = document.getElementsByClassName("initialI");
    var monthly = document.getElementsByClassName("monthlyI");
    var growth = document.getElementsByClassName("growthI");

    for (var i = 0; i < initial.length; i++) {
        var index = profitFunc.length;
        profitFunc[index] = [parseFloat(initial[i].innerHTML), parseFloat(monthly[i].innerHTML), parseFloat(growth[i].innerHTML)];
    }
}

async function calculateExpenseFunct() {
    var initial = document.getElementsByClassName("initialE");
    var monthly = document.getElementsByClassName("monthlyE");
    var growth = document.getElementsByClassName("growthE");
    var value = document.getElementsByClassName("valueE");
    for (var i = 0; i < initial.length; i++) {

        /*if (parseFloat(monthly[i].innerHTML) = undefined) {
            initial[i].innerHTML = 0;
        }
        if (parseFloat(monthly[i].innerHTML) == null) {
            monthly[i].innerHTML = 0;
        }
        if (parseFloat(growth[i].innerHTML) = NaN) {
            growth[i].innerHTML = 0;
        }
        if (parseFloat(value[i].innerHTML) == null) {
            value[i].innerHTML = 0;
        }*/

        var index = expenseFunc.length;
        expenseFunc[index] = [parseFloat(initial[i].innerHTML), parseFloat(monthly[i].innerHTML), parseFloat(growth[i].innerHTML), parseFloat(value[i].innerHTML)];
    }

}



async function drawIt() {
    const years = await calculateYears();

    if (myChart) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: years,
            datasets: [{
                data: netWorth,
                borderColor: "blue",
                label: "Net Worth",
                fill: false
            }, {
                data: goal,
                borderColor: "green",
                label: "Goal Amount",
                fill: false
            }]
        },
        options: {
            responsive: false
        }
    });
}

let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: 0,
        datasets: [{
            data: [100, 101, 110, 120, 140, 180, 220, 250, 260, 270],
            borderColor: "blue",
            label: "Net Worth",
            fill: false
        }, {
            data: goal,
            borderColor: "green",
            label: "Goal Amount",
            fill: false
        }]
    },
    options: {
        responsive: false
    }
});


async function getProfit(xValue) {

    let currentTotal = 0;

    for (let i = 0; i < profitFunc.length; i++) {
        if (profitFunc[i][2] <= 0) {
            currentTotal += profitFunc[i][0] + (profitFunc[i][1] * xValue * 12);
        } else if (profitFunc[i][1] == 0) {
            currentTotal += (profitFunc[i][0] * Math.pow((1 + (profitFunc[i][2] / 100)), xValue));
        } else {
            let exponent = xValue - 1;
            let currentTotalSubSet = 0;
            currentTotalSubSet += (profitFunc[i][0] * Math.pow((1 + (profitFunc[i][2] / 100)), xValue))
            while (exponent >= 0) {
                currentTotalSubSet += (profitFunc[i][1] * 12 * Math.pow((1 + (profitFunc[i][2] / 100)), exponent));
                exponent--;
            }
            currentTotal += currentTotalSubSet;
        }
    }

    return currentTotal;
}

async function getExpense(xValue) {

    let currentTotal = 0;

    for (let i = 0; i < expenseFunc.length; i++) {
        if (expenseFunc[i][2] <= 0 && expenseFunc[i][3] <= 0) {
            currentTotal += expenseFunc[i][0] + (expenseFunc[i][1] * xValue);
        }
        else if (!(expenseFunc[i][2] == 0)) {
            currentTotal += (expenseFunc[i][0] + (expenseFunc[i][1] * xValue) + (profitFunc[i][3] * Math.pow((1 + (profitFunc[i][2] / 100)), xValue)));
        }
        else if (expenseFunc[i][2] == 0) {
            currentTotal += (expenseFunc[i][0] + (expenseFunc[i][1] * xValue) + (profitFunc[i][3] * Math.pow((1 + (profitFunc[i][2] / 100)), xValue)));
        }
    }

    return currentTotal;
}




//////////////////////////////////////////////////////////// AJAX ///////////////////////////////////////////////////////