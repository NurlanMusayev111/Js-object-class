"use strict";


let stu1 = {
    id:1,
    fullName:"Berat Ozdemir",
    age:26,
    address:"Istanbul"
}

let stu2 = {
    id:2,
    fullName:"Cakir Ugurcan",
    age:28,
    address:"Antalya"
}

let stu3 = {
    id:3,
    fullName:"Mehmetcan Aydin",
    age:21,
    address:"Berlin"
}

let stu4 = {
    id:5,
    fullName:"Eren Elmali",
    age:24,
    address:"Konya"
}

let stu5 = {
    id:6,
    fullName:"Nicolas Pepe",
    age:32,
    address:"Nigerya"
}



let group = {
    name:"P418",
    students:[],

    addStudent:function(stu){
        if(stu == undefined){
            alert("Input can't be empty");
            return
        }

        this.students.push(stu)
    },

    getAllStudents:function(){
        return this.students
    },


    getStudentSearch:function(text,students){
        let result = [];

        if(text === ""){
            alert("Input cant be empty");
            return
        }

        for (const item of students) {
            if(item.fullName.toLowerCase().trim().includes(text.toLowerCase().trim())){
                result.push(item)
            }
        }

        return result;
    },



    getStudentsById:function(id,students){
        let result = [];

        if(isNaN(id)){
            alert("Please enter number");
            return;
        }

        for (const item of students) {
            if(id == item.id){
                result.push(item)
            }
        }

        return result;
    },



    deleteStudentsById:function(id){
        return this.students = this.students.filter(student => student.id !== id);
    }
}







 group.addStudent(stu1);
 group.addStudent(stu2);
 group.addStudent(stu3);
 group.addStudent(stu4);
 group.addStudent(stu5)



// let res = group.getAllStudents();
// console.log(res);




// console.log(group.getStudentSearch("s", group.getAllStudents()));
// console.log(group.getStudentsById(2,group.getAllStudents()));


console.log(group.deleteStudentsById(2));


