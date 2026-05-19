pipeline {

    agent any

    tools {
        nodejs 'Node 24'
    }

    stages {

        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Success') {
            steps {
                echo 'Pipeline executed successfully!'
            }
        }

    }
}