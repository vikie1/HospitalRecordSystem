public with sharing class MedicRecords {
    public MedicRecords() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Medical_Practitioner__c> get(){
        return [SELECT Name__c, Role__c 
        FROM Medical_Practitioner__c
        WITH SECURITY_ENFORCED
        ORDER BY Role__c
        ];
    }
    @AuraEnabled
    public static Medical_Practitioner__c save(Medical_Practitioner__c medical_practitioner){
        try {
            insert medical_practitioner;
            return medical_practitioner;
        } catch (Exception exp) {
            throw new AuraHandledException(exp.getMessage());
        }
    }
}
