node {
	stage 'Checkout'
		checkout scm

	stage 'Build'
 		echo 'BUILDING STARTED..123..4'

	stage 'protractor tests'
		echo 'TESTING STARTED..123...4'
		sh 'npm install'
		sh 'ng e2e'
		// sh 'protractor ./e2e/protractor.conf.js'

}
