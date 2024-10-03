class ServiceExercicio {
     Somar(num1, num2) {
        return Number (num1) + Number (num2);
        }
        
         CalcularSalario (valorHora, horasTrabalhadas) {
            return valorHora * horasTrabalhadas
        }
        
        
        
        
        
         
        
        
        
        
        
}

// module.exports = ServiceExercicio -> const exercicio = new ServiceExercicio
module.exports = new ServiceExercicio() 