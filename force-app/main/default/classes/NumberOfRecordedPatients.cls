public with sharing class NumberOfRecordedPatients {
    public NumberOfRecordedPatients() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Patient_Record__c> get() {
        return [SELECT Day__c, Medical_Condition__c, Name__c, Recorded_By__c 
        FROM Patient_Record__c
        WITH SECURITY_ENFORCED
        ORDER BY Day__c];
    }
}
