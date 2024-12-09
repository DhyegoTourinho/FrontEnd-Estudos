const Events = () => {

    const SomeComTitulo = () => {
        const title = document.querySelector("h1");
        title.style.display = "none";
    }
    const MostraTitulo = () => {
        const title = document.querySelector("h1");
        title.style.display = "block";
    }

    const renderCoisas = (x) => {
        if (x) {
            return <h1>Renderizando isso</h1> 
        } else {
            return <h1>Renderizando outra coisa</h1>
        };
    }
    
    return (
        <div>
            <button onClick={SomeComTitulo}>Remover titulo</button>
            <button onClick={MostraTitulo}>Mostrar Titulo</button>
        <div>
            {renderCoisas(true)}
            {renderCoisas(false)}
        </div>
        </div>
    );
}

export default Events;