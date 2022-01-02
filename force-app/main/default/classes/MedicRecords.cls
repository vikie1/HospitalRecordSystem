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
}
