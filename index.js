import inquirer from "inquirer";
class Student {
    name;
    fathername;
    age;
    studentId;
    gender;
    constructor(name, fathername, age, studentId, gender) {
        this.name = name;
        this.fathername = fathername;
        this.age = age;
        this.studentId = studentId;
        this.gender = gender;
    }
}
class StudentManagementSystem {
    students = [];
    async addStudent() {
        const studentDetails = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter student's name:"
            },
            {
                type: "input",
                name: "FatherNAme",
                message: "Enter Your father name"
            },
            {
                type: "input",
                name: "age",
                message: "Enter student's age:"
            },
            {
                type: "input",
                name: "studentId",
                message: "Enter student's ID:"
            },
            {
                type: "list",
                name: "gender",
                message: "Select student's gender:",
                choices: ["Male", "Female"]
            }
        ]);
        const student = new Student(studentDetails.name, studentDetails.fatherName, studentDetails.age, studentDetails.studentId, studentDetails.gender);
        const newStu = this.students.push(studentDetails);
        console.log(studentDetails, "Student added successfully!");
    }
    async displayStudentInfo() {
        const studentIdInput = await inquirer.prompt({
            type: "input",
            name: "studentId",
            message: "Enter student's ID to display information:"
        });
        const student = this.students.find(student => student.studentId === studentIdInput.studentId);
        if (student) {
            console.log("Student Information:");
            console.log("Name:", student.name);
            console.log("Age:", student.age);
            console.log("Student ID:", student.studentId);
            console.log("Gender:", student.gender);
        }
        else {
            console.log("Student not found.");
        }
    }
    listAllStudents() {
        console.log("List of all students:");
        this.students.forEach(student => {
            console.log("Name:", student.name);
            console.log("Age:", student.age);
            console.log("Student ID:", student.studentId);
            console.log("Gender:", student.gender);
            console.log("--------------------");
        });
    }
}
async function main() {
    const output = new StudentManagementSystem();
    while (true) {
        const { action } = await inquirer.prompt({
            type: "list",
            name: "action",
            message: "What do you want to do?",
            choices: ["Add Student", "Display Student Info", "List All Students", "Exit"]
        });
        switch (action) {
            case "Add Student":
                await output.addStudent();
                break;
            case "Display Student Info":
                await output.displayStudentInfo();
                break;
            case "List All Students":
                output.listAllStudents();
                break;
            case "Exit":
                console.log("Exiting...");
                return;
        }
    }
}
main();
