/* A function that prompts the user to input student marks.
 * The input should be between 0 and 100, and its output
 * should correspond to the correct grade, as shown below:
 * A > 79, B - 60 to 79, C - 59 to 49, D - 40 to 49, E - less 40.
 */

function studentGradeGenerator() {
    // Declare variable to store student grade
    let studentGrade;

    // Variable to store marks input by the user
    let studentMarks = prompt("Kindly enter your marks...");

    // Confirm whether or not the user inputs a valid number
    if (isNaN(parseFloat(studentMarks)) || studentMarks < 0 || studentMarks > 100) {
        alert("Kindly input a valid number between 0 - 100");
    }
    else {
        if (parseFloat(studentMarks) > 79) {
            studentGrade = "A";
        }
        else if (parseFloat(studentMarks) >= 60) {
            studentGrade = "B";
        }
        else if (parseFloat(studentMarks) >= 49) {
            studentGrade = "C";
        }
        else if (parseFloat(studentMarks) >= 40) {
            studentGrade = "D";
        }
        else {
            studentGrade = "E";
        }
        // Display student grade
        alert(`Your grade is ${studentGrade}`);
    }
}

studentGradeGenerator()