pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script{
                    sh 'docker pull redis'
                    sh 'docker build -t mi-app-jenkins .'
                }
                echo 'Construyendo la aplicación...'
            }
        }
        stage('Test') {
            steps {
                echo 'Ejecutando pruebas... (simulado)'
            }
        }
        stage('Deploy') {
            steps {
                script{
                     sh 'docker run -d -p 3000:3000 --name mi-app-jenkins --link redis:redis mi-app-jenkins'
                    echo 'Desplegando la aplicación...'
                }
            }
        }
    }

    post {
        success {
            echo '¡Despliegue exitoso!'
        }
        failure {
            echo 'Error en el despliegue.'
        }
    }
}
