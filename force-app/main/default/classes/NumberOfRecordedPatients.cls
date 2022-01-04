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
    
    @AuraEnabled(cacheable=true)
    public static List<Patient_Record__c> getByCondition(String condition) {
        return [SELECT Day__c, Medical_Condition__c, Name__c, Recorded_By__c 
        FROM Patient_Record__c
        WHERE Medical_Condition__c=:condition
        WITH SECURITY_ENFORCED
        ORDER BY Day__c];
    }
    @AuraEnabled
    public static Patient_Record__c save(Patient_Record__c record){
        try {
            insert record;
            return record;
        } catch (Exception exp) {
            throw new AuraHandledException(exp.getMessage());
        }
    }
}
