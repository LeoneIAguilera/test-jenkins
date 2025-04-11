pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Construyendo la aplicación...'
                sh 'docker build -t mi-app-jenkins .'
            }
        }
        stage('Test') {
            steps {
                echo 'Ejecutando pruebas... (simulado)'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Desplegando la aplicación...'
                sh 'docker run -d -p 3000:3000 --name mi-app-jenkins --link redis:redis mi-app-jenkins'
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