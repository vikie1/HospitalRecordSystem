trigger UpdateDate on Patient_Record__c (before insert, before update) {
    for(Patient_Record__c record : Trigger.new){
        DateTime currentTime = System.now();
        record.Day__c = currentTime;
    }
}