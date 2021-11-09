function Surgery(name,patient){
    this.name = name;
    this.patient = patient;
}

Surgery.prototype.patientList = function(){
    for(let i = 0; i < this.patient.length; i++){
       var name_patient = this.patient[i].name;
       var age_patient = this.patient[i].age;
       var rut_patient = this.patient[i].rut;
       var diagnosis_patient = this.patient[i].diagnosis;

       console.log(`Paciente número ${i + 1}: ${name_patient} | ${age_patient} | ${rut_patient} | ${diagnosis_patient}`);
    }
}

Surgery.prototype.searchPatient = function(name){
    for(let i = 0; i < this.patient.length; i++){
        var name_patient = this.patient[i].name;
        var age_patient = this.patient[i].age;
        var rut_patient = this.patient[i].rut;
        var diagnosis_patient = this.patient[i].diagnosis;
        if (name.toLowerCase() === name_patient.toLowerCase()) {
            console.log(`Paciente numero ${i + 1}: ${name_patient} | ${age_patient} | ${rut_patient} | ${diagnosis_patient}`);
        }
    }
}

Surgery.prototype.addedPatient = function(patient){
    this.patient.push(patient);
}

Surgery.prototype.changeDiagnosis = function(rut,diagnosis){
    var index = this.patient.findIndex(function(patient){
        return patient.rut === rut;
    });
    if(index !== -1){
        this.patient[index].setDiagnosis(diagnosis);
    }
}

function Patient(name,age,rut,diagnosis){
    this.name = name;
    this.age = age;
    this.rut = rut;
    this.diagnosis = diagnosis;
}

Patient.prototype.setDiagnosis = function(diagnosis){
    this.diagnosis = diagnosis;
}

let patient1 = new Patient('Juan',20,'12.345.678-9','Cancer');
let patient2 = new Patient('Pedro',30,'10.678.345-0','Tuberculosis');
let patient3 = new Patient('Maria',20,'18.315.968-9','Asma');
let patient4 = new Patient('Elena',30,'24.345.698-4','Diabetes');
let patient5 = new Patient('Felipe',20,'12.345.678-5','Influenza');
let patient6 = new Patient('Juanito',20,'12.345.678-1','Cancer');

let surgery1 = new Surgery('Cirugia',[patient1,patient2,patient3,patient4, patient5]);

surgery1.patientList();
// // surgery1.searchPatient('juanito');
// surgery1.addedPatient(patient6);
// surgery1.changeDiagnosis('12.345.678-9','Cancer de pancreas');
// surgery1.patientList('Juan');