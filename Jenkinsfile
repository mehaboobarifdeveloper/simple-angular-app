node {
	stage 'Checkout'
		checkout scm

	stage 'Build'
 		echo 'BUILDING STARTED..123..4'
		//sh 'sudo ng serve --progress=false --watch false'
	stage 'protractor tests'
		echo 'TESTING STARTED..123...4'
		sh 'sudo npm install'
		sh 'sudo ng e2e'
		//sh 'protractor ./e2e/protractor.conf.js'

}
