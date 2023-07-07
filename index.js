// Your code here
function createEmployeeRecord (){
    // employees raw record
    // let testEmployee = ["Gray", "Worm", "Security", 1];
    //create an object for the records
    testEmployee={
        firstName: "Gray",
        familyName: "Worm",
        title: "Security",
        payPerHour: 1,
        timeInEvents: [],
        timeOutEvents: []
    }
}
let testEmployee = ["Gray", "Worm", "Security", 1];
function createEmployeeRecord(employeeData) {
    return {
      firstName: employeeData[0],
      familyName: employeeData[1],
      title: employeeData[2],
      payPerHour: employeeData[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
let dataEmployees = [
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300],
    ["Byron", "Poodle", "Mascot", 3],
    ["Julius", "Caesar", "General", 27],
    ["Rafiki", "", "Aide", 10],
    ["Simba", "", "King", 100]
  ]
  //create a function that creates data as an individual employee record
  function createEmployeeRecords(data) {
    return data.map(createEmployeeRecord);
  }
  let employeeRecords = createEmployeeRecords(dataEmployees);

  function createTimeInEvent(employeeRecord, dateTimeString) {
    let [date, hour] = dateTimeString.split(' ');
  
    employeeRecord.timeInEvents.push({
      type: "TimeIn",
      date: date,
      hour: parseInt(hour, 10)
    });
  
    return employeeRecord;
  }


  function hoursWorkedOnDate(employeeRecord, date) {
    let timeInEvent = employeeRecord.timeInEvents.find(event => event.date === date);
    let timeOutEvent = employeeRecord.timeOutEvents.find(event => event.date === date);
  
    let hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
  
    return hoursWorked;
  }
  
  function wagesEarnedOnDate(employeeRecord, date) {
    let hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    let wage = employeeRecord.payPerHour;
  
    let wagesEarned = hoursWorked * wage;
  
    return wagesEarned;
  }
  
  function allWagesFor(employeeRecord) {
    let datesWorked = employeeRecord.timeInEvents.map(event => event.date);
  
    let totalWages = datesWorked.reduce((total, date) => {
      return total + wagesEarnedOnDate(employeeRecord, date);
    }, 0);
  
    return totalWages;
  }
  
  function calculatePayroll(employeeRecords) {
    let totalPayroll = employeeRecords.reduce((total, record) => {
      return total + allWagesFor(record);
    }, 0);
  
    return totalPayroll;
  }
  


