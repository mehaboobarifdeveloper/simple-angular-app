node {
	stage 'Checkout'
		checkout scm

	stage 'Build'
 		echo 'BUILDING STARTED..123..4'

	stage 'protractor tests'
		echo 'TESTING STARTED..123...4'
		sh 'sudo npm install'
		sh 'sudo xvfb-run -a npm run e2e --no-progress --config=e2e/protractor.conf.js'
		// sh 'protractor ./e2e/protractor.conf.js'

}
