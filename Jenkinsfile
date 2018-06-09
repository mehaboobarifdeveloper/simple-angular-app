node {
	stage 'Checkout'
		checkout scm

	stage 'Build'
 		echo 'Testing..123..4'

	stage 'protractor tests'
    sh 'sudo webdriver-manager update'
    sh 'sudo npm install'
		sh 'sudo npm e2e'
}
