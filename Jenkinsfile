node {
	stage 'Checkout'
		checkout scm

	stage 'Build'
 		echo 'Testing..'

	stage 'protractor tests'
    sh 'sudo webdriver-manager update'
    sh "sudo npm install"
		sh "sudo ng e2e"

}