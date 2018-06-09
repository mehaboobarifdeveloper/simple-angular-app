node {
	stage 'Checkout'
		checkout scm

	stage 'Build'
 		echo 'Testing..'

	stage 'protractor tests'
    sh 'sudo webdriver-manager update'
    sh "sudo npm install"
		sh "sudo ng serve && sleep 30000 && protractor ./e2e/protractor.conf.js"
}
