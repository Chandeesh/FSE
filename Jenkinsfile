pipeline {
  stages {
    stage('Git checkout') { 
    // for display purposes
      git branch: 'ECommerce_SE_Test_UI', url: 'https://github.com/Chandeesh/FSE.git'
   	}
   	stage('UI') {
        try {
           script {
              sh "./gradlew clean uitest --no-daemon"
           }
        } catch (err) {

        } 
    }
   
     stage('API') {
        try {
           script {
              sh "./gradlew apitest --no-daemon"
           }
        } catch (err) {

        } 
   	 }
   	 
   	 stage('Aggregate') {
   	 try {
           script {
              sh "./gradlew aggregate --no-daemon"
           }
        } catch (err) {

        }
   	 }
   }
}
