import { LightningElement, wire } from 'lwc';
import get from '@salesforce/apex/NumberOfRecordedPatients.get';
import NAME_FIELD from '@salesforce/schema/Patient_Record__c.Name__c';
import MEDIC_FIELD from '@salesforce/schema/Patient_Record__c.Recorded_By__c';
import CONDITION_FIELD from '@salesforce/schema/Patient_Record__c.Medical_Condition__c';
import DATE_FIELD from '@salesforce/schema/Patient_Record__c.Day__c';
const COLUMNS = [
    { label: 'Name', fieldName: NAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Medic', fieldName: MEDIC_FIELD.fieldApiName, type: 'text' },
    { label: 'Condition', fieldName: CONDITION_FIELD.fieldApiName, type: 'text' },
    { label: 'Date', fieldName: DATE_FIELD.fieldApiName, type: 'date' }
];
export default class DisplayPatientRecords extends LightningElement {
    @wire(get) records;
    columns = COLUMNS;
}