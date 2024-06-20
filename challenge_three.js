/* Write a program whose major task is to calculate 
* an individual’s Net Salary by getting the inputs 
* of basic salary and benefits. Calculate the payee 
* (i.e. Tax), NHIF Deductions, NSSF Deductions, 
* gross salary, and net salary. 
*/

function netSalaryCalculator() {
    let basicSalary = parseFloat(prompt("Enter your basic salary..."));
    let benefits = parseFloat(prompt("Enter your benefits..."));
    let grossPay = basicSalary + benefits;
    let netSalary;

    // Confirm whether or not both the basic salary and benefits are valid
    if (isNaN(parseFloat(basicSalary)) || isNaN(parseFloat(benefits))) {
        alert("Kindly input valid basic salary and benefits");
        return;
    }

    else {
        // let myNhif = nhifCalculator(grossPay)
        let myNssf = nssfCalculator(grossPay)
        let myPaye = payeCalculator(grossPay)
        let myNhif = nhifCalculator(grossPay)
        netSalary =  grossPay - myPaye - myNhif

        alert(`Gross Salary: ${grossPay} \nIncome Tax: ${myPaye} \nNSSF Deductions: ${myNssf} \nNHIF Deductions: ${myNhif} \nNet Salary: ${netSalary}`);
    }
}

function payeCalculator(grossPay) {
    let taxableIncome = grossPay - nssfCalculator(grossPay);
    let paye = 0;

    if (taxableIncome <= 24000) {
        paye = taxableIncome * 0.1;
    } else if (taxableIncome <= 32333) {
        paye = 24000 * 0.1 + (taxableIncome - 24000) * 0.25;
    } else if (taxableIncome <= 500000) {
        paye = 24000 * 0.1 + (32333 - 24000) * 0.25 + (taxableIncome - 32333) * 0.3;
    } else if (taxableIncome <= 800000) {
        paye = 24000 * 0.1 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.3 + (taxableIncome - 500000) * 0.325;
    } else {
        paye = 24000 * 0.1 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.3 + (800000 - 500000) * 0.325 + (taxableIncome - 800000) * 0.35;
    }

    return paye;
}

function nhifCalculator(grossPay) {
    let nhifDeductions = 0;

    if (grossPay <= 5999) {
        nhifDeductions = 150;
    }
    else if (grossPay <= 6000 && grossPay <= 7999) {
        nhifDeductions = 300;
    }
    else if (grossPay <= 8000 && grossPay <= 11999) {
        nhifDeductions = 400;
    }
    else if (grossPay <= 12000 && grossPay <= 14999) {
        nhifDeductions = 500;
    }
    else if (grossPay <= 15000 && grossPay <= 19999) {
        nhifDeductions = 600;
    }
    else if (grossPay <= 20000 && grossPay <= 24999) {
        nhifDeductions = 750;
    }
    else if (grossPay > 24999 && grossPay <= 29999) {
        nhifDeductions = 850;
    }
    else if (grossPay <= 30000 && grossPay <= 34999) {
        nhifDeductions = 900;
    }
    else if (grossPay <= 35000 && grossPay <= 39999) {
        nhifDeductions = 950;
    }
    else if (grossPay <= 40000 && grossPay <= 44999) {
        nhifDeductions = 1000;
    }
    else if (grossPay <= 45000 && grossPay <= 49999) {
        nhifDeductions = 1100;
    }
    else if (grossPay <= 50000 && grossPay <= 59999) {
        nhifDeductions = 1200;
    }
    else if (grossPay <= 60000 && grossPay <= 69999) {
        nhifDeductions = 1300;
    }
    else if (grossPay <= 70000 && grossPay <= 79999) {
        nhifDeductions = 1400;
    }
    else if (grossPay <= 80000 && grossPay <= 89999) {
        nhifDeductions = 1500;
    }
    else if (grossPay <= 90000 && grossPay <= 99999) {
        nhifDeductions = 1600;
    }
    else {
        nhifDeductions = 1700;
    }

    return nhifDeductions;
}

function nssfCalculator(grossPay) {
    const nssfRate = 0.06;
    let totalNSSFDeductions = 0;

    if (grossPay <= 36000) {
        totalNSSFDeductions = grossPay * nssfRate;
    } else {
        totalNSSFDeductions = 2160;
    }

    return totalNSSFDeductions;
}

netSalaryCalculator();