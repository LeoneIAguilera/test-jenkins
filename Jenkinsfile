pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
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
                echo 'Desplegando la aplicación...'
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
