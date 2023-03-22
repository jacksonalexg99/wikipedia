import React, {useState, useEffect} from 'react';
import wiki from 'wikijs';
import Map from "./Components/Map";
import Card from "./Components/Card/Card";
import Summary from "./Components/summary";
import Loading from "./Components/Loading/Loading"
import './app.css'

function App() {
    const [selectedCountry, setSelectedCountry] = useState('iran')
    const [summary, setSummary] = useState('')
    const [info, setInfo] = useState('')
    const [flag, setFlag] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const page = await wiki().page(selectedCountry)
            const [summary, info, images] = await Promise.all([
                page.summary(),
                page.info(),
                page.images()
            ])
            const flag = info.imageFlag.replace(/\s/g, '_')
            images.some(image => {
                if (image.includes(flag)) {
                    setFlag(image)
                    return true;
                }
                return false;
            })
            setSummary(summary)
            setInfo(info)
            setLoading(false)
        }
        fetchData()
    }, [selectedCountry])
    const handlerSelected = (name) => {
        setSelectedCountry(name)
    }
    return (
        <div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col col-md-9">
                        <Map handlerSelected={handlerSelected}/>
                    </div>

                    <div className=" col-12 col-md-3">
                        <Card loading={loading} info={info} flag={flag}/>
                    </div>
                </div>
                <div className="row mt-3">
                    {loading ? <Loading/> : <Summary summary={summary}/>}
                </div>
            </div>
        </div>

    );
}

export default App;
