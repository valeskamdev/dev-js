const students = [
    { name: "Mike", testGrade: 7},
    { name: "John", testGrade: 3},
    { name: "Jerry", testGrade: 5},
    { name: "Jane", testGrade: 8},
    { name: "Mary", testGrade: 10},
    { name: "Bob", testGrade: 2},
    { name: "Sue", testGrade: 9},
    { name: "Tom", testGrade: 8},
]

const approvedStudents = students.map(student => {
    const students = {
        name: student.name,
        finalResult: student.testGrade >= 7 ? "approved" : "disapproved"
    }
    return students;
})

console.log(approvedStudents);