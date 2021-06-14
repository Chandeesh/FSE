pipeline {
  agent any
  stages {
    stage('Git checkout') { 
    	steps {
      		git branch: 'ECommerce_SE_Test_UI', url: 'https://github.com/Chandeesh/FSE.git'
   		} 
   	}
   	stage('UI') {
   		steps {
              sh "./gradlew clean uitest --no-daemon"
         }
    }
    stage('API') {
    	steps {
              sh "./gradlew apitest --no-daemon"
        }
   	 }
   	 stage('Aggregate') {
   	 	steps {
              sh "./gradlew aggregate --no-daemon"  
              publishHTML (target: [
              reportDir: 'reports',
              reportFiles: 'index.html',
              reportName: "Test report"
            ])           
        }
   	 }
   }
}