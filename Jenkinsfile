pipeline {
  stages {
    stage('Git checkout') { 
    steps{
    // for display purposes
      git branch: 'ECommerce_SE_Test_UI', url: 'https://github.com/Chandeesh/FSE.git'
   	} }
   	stage('UI') {
   	steps{
        try {
           script {
              sh "./gradlew clean uitest --no-daemon"
           }
        } catch (err) {

        } }
    }
   
     stage('API') {
     steps {
        try {
           script {
              sh "./gradlew apitest --no-daemon"
           }
        } catch (err) {

        } 
        }
   	 }
   	 
   	 stage('Aggregate') {
   	 steps {
   	 try {
           script {
              sh "./gradlew aggregate --no-daemon"
           }
        } catch (err) {

        }
        }
   	 }
   }
}
