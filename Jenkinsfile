node {
	stage 'Checkout'
		checkout scm

	stage 'Build'
 		echo 'Testing..123'

	stage 'protractor tests'
    sh 'sudo webdriver-manager update'
    sh "sudo npm install"
		sh "sudo ng serve && sleep 30000 && sudo protractor ./e2e/protractor.conf.js"
}
