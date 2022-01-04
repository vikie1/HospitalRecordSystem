# Hospital Record System
This is a project which runs on salesforce. It allows medical practitioners to add patient records. To edit a patient record, you must first be a medic.

Below are steps to run the system on your org
## Get the following requirements
1. A [salesforce developer account](https://developer.salesforce.com/)
2. [sfdx cli tool](https://developer.salesforce.com/tools/sfdxcli)

## Setup the org
1. Clone the repository -> `$ git clone https://github.com/vikie1/HospitalRecordSystem.git`
2. `$ cd HospitalRecordSystem`
3. `$ sfdx auth:web:login -d -a DevHub` -> Login to your DevHub
`$ sfdx force:org:create -s -f config/project-scratch-def.json -a hospital-records` -> Create a scratch org.
4. `$ sfdx force:source:push` -> deploy the project to the scratch org
5. `$ sfdx force:org:open`

## View the project

1. On the quick search, look for `Lightning App Builder`.
2. Create a new page by selecting app page and give it a name you prefer.
3. On the left panel, you should see `addMedicRecord, addPatientRecord, displayPatientRecords, listOfPatientsWithCertainCondition and displayMedicRecords` under Custom.
4. Drag the 3 components to the lightning app builder page.
5. On the App search, type the name of the page you created on step 2 and you should see the component you selected.
