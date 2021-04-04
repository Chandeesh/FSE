node {
   stage('UI') {
        try {
            sh "./gradlew clean test"
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
