import { LightningElement } from 'lwc';
import OBJECT from '@salesforce/schema/Medical_Practitioner__c';
import NAME from '@salesforce/schema/Medical_Practitioner__c.Name__c';
import Role from '@salesforce/schema/Medical_Practitioner__c.Role__c';

export default class AddMedicRecord extends LightningElement {
    object = OBJECT;
    fields = [NAME,Role];
}