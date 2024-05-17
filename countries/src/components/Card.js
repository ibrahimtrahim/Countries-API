export const Card = ({country}) => {
    const {name, population, region, capital} = country;
    return (
        <div class="max-w-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 m-4">
            <a href="#">
                <img class="rounded-t-lg" src={country.flags.png} alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{country.name.common}</h5>
                </a>
                <p class="font-normal text-gray-700 dark:text-white">Population: {country.population}</p>
                <p class="font-normal text-gray-700 dark:text-white">Region: {country.region}</p>
                <p class="font-normal text-gray-700 dark:text-white">Capital: {country.capital}</p>
            </div>
      </div>
    )
}