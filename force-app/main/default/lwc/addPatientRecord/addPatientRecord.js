import { api, LightningElement } from 'lwc';
import PATIENT_OBJECT from '@salesforce/schema/Patient_Record__c';
import NAME from '@salesforce/schema/Patient_Record__c.Name__c';
import RecordedBy from '@salesforce/schema/Patient_Record__c.Recorded_By__c';
import MedicalCondition from '@salesforce/schema/Patient_Record__c.Medical_Condition__c';

export default class AddPatientRecord extends LightningElement {
    object = PATIENT_OBJECT;
    fields = [NAME,RecordedBy,MedicalCondition];
    handleSuccess(event){
        this.template.querySelector('c-display-patient-records').handleRefresh(true);
    }
}
