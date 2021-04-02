node {
   stage('Git checkout') { // for display purposes
      git 'https://github.com/Chandeesh/FSE.git'
   }
   stage('UI') {
        try {
           script {
              sh "./gradlew clean test --no-daemon"
           }
        } catch (err) {

        } finally {
            publishHTML (target: [
            reportDir: 'target/site/serenity',
            reportFiles: 'index.html',
            reportName: "UI tests report"
            ])
        }
   }
}
