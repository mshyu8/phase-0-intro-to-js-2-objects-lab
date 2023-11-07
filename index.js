// Write your solution in this file!

const employee = {
    
    name : "burger king",
    streetAddress : "1010 the street"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {
        ...employee,
        [key] : value
    };
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]= value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee};

    delete newObj[key];

    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];

    return employee;
}
