import React, { useState, useEffect } from 'react';
import getBlockchain from './ethereum.js'
import axios from 'axios';


function App() {

    const [formValues, setFormValues] = useState({});
    const handleChange = (e) => {
        e.preventDefault();
        setFormValues({ ...formValues, [e.target.id]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues.tokenID);
    };

    const [tokenInfo, setTokenInfo] = useState({});
    useEffect(() => {
        const init = async () => {
            const nft = await getBlockchain();
            const tokenURI = await nft.tokenURI(formValues.tokenID || 0);

            const { data } = await axios.get(tokenURI);
            setTokenInfo(data.result)
            setTokenInfo(tokenInfo => ({ ...tokenInfo, "tokenURI": tokenURI }))
            return () => {
                console.log("return");
            }
        }
        init()
    }, [formValues])

    if (typeof tokenInfo === 'undefined') {
        return 'Loading...';
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="TokenID">TokenID</label>
                    <input type="text" id="tokenID" onChange={handleChange} />
                </div>
                <button type="submit" className="submit-btn">
                    Submit
                </button>
            </form>
            <div className='centered'>
                <div className='col-sm-12'>
                    <h1 className='text-center'>{tokenInfo.name}</h1>
                    <div className='butch'>
                        <p className='lead text-center' >{tokenInfo.description}</p>
                        <img src={tokenInfo.tokenURI + ".jpeg"} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
