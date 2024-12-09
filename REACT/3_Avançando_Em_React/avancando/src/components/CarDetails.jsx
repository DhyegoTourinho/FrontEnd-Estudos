
const CarDetails = (cars) => {
    return (
        <div>
            {cars.cars.map((car) => (
                <div>
                <h2>Detalhes do carro</h2>
                <ul key={car.id}>
                    <li>Marca: {car.brand}</li>
                    <li>Quilometragem: {car.km}</li>
                    <li>Cor: {car.color}</li>
                </ul>
                </div>
            ))}
        </div>
    )
}

export default CarDetails;