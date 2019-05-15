// objects w/ properties and methods needed
function Job(title, organization, city, state){
    this.title = title;
    this.organization = organization;
    this.city = city;
    this.state = state
    this.toString = function(){
      let jobString = 'Title: ' + title + 
             ', Organization: ' + organization+ 
             ', City: ' + city + 
             ', ' + state + '\n'  
      return jobString;
    }
}

function JobsList(){
    let list = [];
    this.getList = function(){
        return list;
    }
    this.addJob = function(job){
        list.push(job)
    }
}

//my Values from string/Json/DB..
let string = `Chipotle, Lead Chef, Denver, CO
Equity, Stunt Double, Los Angeles, CA
IBM, Manager of Fun, Albany, NY
Tit 4 Tat, Associate Tattoo Artist, Brooklyn, NY
IBM, Assistant to the Regional Manager, Los Angeles, CA
Philharmonic, Lead Guitarist, Woodstock, NY`

let myArrJobs = string.split('\n')

//create the List for All Opp. and fill it 
let myListAll=new JobsList;
for (let i =0 ; i < myArrJobs.length;i++){
    let information = myArrJobs[i].split(', ');
    let newJob = new Job(information[1], information[0], information[2], information[3])  
    myListAll.addJob(newJob);
}

let myAllJobList = myListAll.getList()
myAllJobList.sort((a,b)=> (a.title>b.title)*2-1); 

let outputAll = '';

for (let job in myAllJobList){
    outputAll += myAllJobList[job].toString() +'<br>';    
}
document.getElementById("allOpportunities").innerHTML += outputAll;

//when change in the dropdown list, we'll only display the jobs for the selected state
function changeState() {
  let stateSelected = document.getElementById("state").value;
  let myStateJobList = myAllJobList.filter(job => job.state === stateSelected);
  let stateOutput = ''
  for (let job in myStateJobList){
    stateOutput += myStateJobList[job].toString() +'<br>';    
}
  switch(stateSelected){
    case 'CA': document.getElementById("stateOpportunities").innerHTML ='Jobs in California:<br>'
      break;
    case 'CO': document.getElementById("stateOpportunities").innerHTML ='Jobs in Colorado:<br>'
      break;
    case 'NY': document.getElementById("stateOpportunities").innerHTML ='Jobs in New York:<br>'
      break;
    case 'ALL':         document.getElementById("stateOpportunities").innerHTML =''
      break;
  }
  document.getElementById("stateOpportunities").innerHTML += stateOutput      
}

//button clicked to display all the jobs ordered by cities
function displayByCity(){
  document.getElementById("btnCities").style.display = "none";
  document.getElementById("listCities").style.display = "block";
  let hash = {}
  let listByCity = myAllJobList.sort((a,b)=> (a.city>b.city)*2-1);  
   for(let city in listByCity){
     if(!hash[listByCity[city].city]){
       hash[listByCity[city].city] = true;
       document.getElementById("cityOpportunities").innerHTML += '<div class="city">' +listByCity[city].city + ', ' + listByCity[city].state + '</div>' 
      }
     document.getElementById("cityOpportunities").innerHTML += '<div class="titleOrg">' + listByCity[city].title + ' at ' + listByCity[city].organization + '</div>' 
   }
}