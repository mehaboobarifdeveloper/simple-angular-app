node {
	stage 'Checkout'
		checkout scm

	stage 'Build'
 		echo 'BUILDING STARTED..123..4'

	stage 'protractor tests'
		echo 'TESTING STARTED..123...4'
		sh './e2e/protractor config.js'
}
