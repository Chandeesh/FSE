node {
   stage('Git checkout') { // for display purposes
      git branch: 'ECommerce_SE_Test_UI', url: 'https://github.com/Chandeesh/FSE.git'
   }
   stage('UI') {
        try {
           script {
              sh "./gradlew clean test --no-daemon"
           }
        } catch (err) {

        } finally {
            publishHTML (target: [
            reportDir: 'reports',
            reportFiles: 'index.html',
            reportName: "UI tests report"
            ])
        }
   }
}
