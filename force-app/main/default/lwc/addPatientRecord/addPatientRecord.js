import { LightningElement, track } from 'lwc';
import save from '@salesforce/apex/NumberOfRecordedPatients.save';
import PATIENT_OBJECT from '@salesforce/schema/Patient_Record__c';
import NAME from '@salesforce/schema/Patient_Record__c.Name__c';
import RecordedBy from '@salesforce/schema/Patient_Record__c.Recorded_By__c';
import MedicalCondition from '@salesforce/schema/Patient_Record__c.Medical_Condition__c';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class AddPatientRecord extends LightningElement {
    object = PATIENT_OBJECT;
    fields = [NAME,RecordedBy,MedicalCondition];
    @track record={
        Name__c:NAME,
        Recorded_By__c:RecordedBy,
        Medical_Condition__c: MedicalCondition
    };
    handleNameChange(event){
        this.record.Name__c = event.target.value;
    }
    handleRecorderChange(event){
        this.record.Recorded_By__c = event.target.value;
    }
    handleConditionChange(event){
        this.record.Medical_Condition__c = event.target.value;
    }
    
    handleSave(){
        save({record: this.record})
        .then(() => {
            const toastEvent = new ShowToastEvent({
                title:'Done!',
                message:'The records have been added',
                variant:'success'
            });
            this.dispatchEvent(toastEvent);
            this.template.querySelector('c-display-patient-records').handleRefresh(true);
        })
    }
}
