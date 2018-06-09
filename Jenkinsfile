node {
	stage 'Checkout'
		checkout scm

	stage 'Build'
 		echo 'Testing..'

	stage 'protractor tests'
    sh 'sudo webdriver-manager update'
    sh "sudo npm install"
		sh "sudo ng serve"
    def time = 3000
    echo "Waiting 3000 seconds for deployment to complete prior starting smoke testing"
    sleep time.toInteger() // seconds
    sh 'protractor ./e2e/protractor.conf.js'

}
