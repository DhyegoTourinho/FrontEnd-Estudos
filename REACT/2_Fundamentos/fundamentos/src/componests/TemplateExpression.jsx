const TemplateExpression = () => {
    const name = "Dhyego";
    const data = {
        age: 31,
        job: "Programador"
    }
    return (
        <div>
            <h3>Bem vindo {name}</h3>
        <p>Sua idade é {data.age} e seu trabalho é {data.job}</p>
        </div>
    );
};

export default TemplateExpression;