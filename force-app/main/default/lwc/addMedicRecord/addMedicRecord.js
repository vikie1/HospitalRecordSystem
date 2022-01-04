import { LightningElement, track } from 'lwc';
import save from '@salesforce/apex/MedicRecords.save';
import NAME from '@salesforce/schema/Medical_Practitioner__c.Name__c';
import Role from '@salesforce/schema/Medical_Practitioner__c.Role__c';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class AddMedicRecord extends LightningElement { 
    @track record={
        Name__c:NAME,
        Role__c:Role 
    };
    handleNameChange(event){
        this.record.Name__c = event.target.value;
    }
    handleRoleChange(event){
        this.record.Role__c = event.target.value;
    }
    handleSave(){
        save({medical_practitioner: this.record})
        .then(() => {
            const toastEvent = new ShowToastEvent({
                title:'Done!',
                message:'The records have been added',
                variant:'success'
            });
            this.dispatchEvent(toastEvent);
        })
    }
}