node {
	stage 'Checkout'
	{
		checkout scm
	}

	stage 'Build'{
 		echo 'BUILDING STARTED..123..4...5'
	}
	stage 'protractor tests'{
		echo 'TESTING STARTED..123...4'
		sh 'sudo npm install'
		//sh 'sudo npm run e2e:ci'
		sh 'protractor ./e2e/protractor.conf.js'
	}

	 stage('deploying') {
		sh '''		 
        # exit 1 on errors
        set -e
        # deal with remote
        echo "Checking if remote exists..."	
 		# deal with remote
        echo "Checking if remote exists..."	
		 '''		 		 
	 }

}
