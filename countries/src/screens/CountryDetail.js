import { useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import axios from "axios";

function CountryDetail() {
  const {name} = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCountry() {
      try {
        const { data } = await axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
        setData(data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchCountry();
  }, [name]);

  if (!data) {
    return <p>Loading...</p>;
  }

  const nativeName = data.name.nativeName ? Object.values(data.name.nativeName)[0].common : data.name.common;
  const currencies = data.currencies ? Object.values(data.currencies).map(currency => currency.name).join(", ") : "N/A";
  const languages = data.languages ? Object.values(data.languages).join(", ") : "N/A";

  return (
    <main className="dark:bg-slate-800 p-5">
      <button onClick={() => navigate(-1)} className="mb-5 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5 mr-2"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        Back
      </button>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-md h-96">
          <img src={data.flags.svg} alt={`${data.name.common} flag`} />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h3 className="text-4xl font-bold mb-3 text-center lg:text-left">{data.name.common}</h3>
          <div>
            <div>
              <p className="mb-4">Native Name: {nativeName}</p>
              <p className="mb-4">Population: {data.population.toLocaleString()}</p>
              <p className="mb-1">Region: {data.region}</p>
              <p className="mb-1">Sub Region: {data.subregion}</p>
              <p className="mb-1">Capital: {data.capital}</p>
            </div>
            <div>
              <p className="mb-4">Top Level Domain: {data.tld[0]}</p>
              <p className="mb-4">Currencies: {currencies}</p>
              <p className="mb-1">Languages: {languages}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CountryDetail