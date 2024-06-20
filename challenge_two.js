/* A program that takes the speed of a car as input e.g 80. 
* If the speed is less than 70, it should print “Ok”. 
* Otherwise, for every 5 km/s above the speed limit (70), 
* it should give the driver one demerit point and print 
* the total number of demerit points.
*/

function speedDetector() {
    // Declare variable to store demerit points
    let demeritPoints;

    // Variable to store speed of car
    let speedOfCar = parseFloat(prompt("Enter the speed of the car..."));

    // Confirm whether or not the speed of car is a valid number
    if (isNaN(parseFloat(speedOfCar)) || speedOfCar < 0) {
        alert("Kindly input a valid number above 0");
    }
    else {
        // Calculate demeritPoints for every 5 km/s above the speed limit (70)
        demeritPoints = ((speedOfCar - 70) / 5)
        // If speed of car <= 70
        if (speedOfCar <= 70) {
            alert("Ok")
        }
        //  If speed of car > 70 and demerit points <= 12
        else if (speedOfCar > 70 && demeritPoints <= 12) {
            alert(`Total demerit points: ${demeritPoints}`)
        }
        //  If speed of car > 70 and demerit points > 12
        else if (speedOfCar > 70 && demeritPoints > 12) {
            demeritPoints = ((speedOfCar - 70) / 5)
            alert("License suspended")
        }
    }
}

speedDetector()