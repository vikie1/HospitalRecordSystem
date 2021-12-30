trigger VerifyMedic on Patient_Record__c (before insert, before update) {
    for(Patient_Record__c record : Trigger.New){
        List<Medical_Practitioner__c> medic = [SELECT Name__c FROM Medical_Practitioner__c WHERE Name__c=:record.Recorded_By__c];
        if (medic.size()<=0){
            record.addError('Only authorised personnel can insert or update records');
        }
    }
}