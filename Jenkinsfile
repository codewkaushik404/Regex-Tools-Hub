pipeline {
    agent any

    tools {
        nodejs 'Node 24'
    }

    stages {
        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    bat 'npm install'
                }
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('frontend') {
                    bat 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    bat 'npm run build'
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