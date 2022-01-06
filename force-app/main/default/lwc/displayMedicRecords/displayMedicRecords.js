import { LightningElement, wire } from 'lwc';
import get from '@salesforce/apex/MedicsController.get';
import {refreshApex } from '@salesforce/apex';
import NAME_FIELD from '@salesforce/schema/Medical_Practitioner__c.Name__c';
import ROLE_FIELD from '@salesforce/schema/Medical_Practitioner__c.Role__c';
const COLUMNS = [
    { label: 'Name', fieldName: NAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Field', fieldName: ROLE_FIELD.fieldApiName, type: 'text' }
];
export default class DisplayPatientRecords extends LightningElement {
    @wire(get) records;
    columns = COLUMNS;
    //incase of no auto refresh
    handleClick(event){
        refreshApex(this.get);
        refreshApex(this.records);
    }  
}
