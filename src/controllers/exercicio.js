class ControllerExercicio {
    async somar(req, res) {
        const { num1, num2 } = req.body;
        const resultado = this.service.somar(num1, num2);
        return res.json({ message: resultado });
    }
}