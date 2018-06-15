node {
	stage 'Checkout'
	{
		checkout scm
	}

	stage 'Build'{
 		echo 'BUILDING STARTED..123..4'
	}
	stage 'protractor tests'{
		echo 'TESTING STARTED..123...4'
		sh 'sudo npm install --progress false'
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
