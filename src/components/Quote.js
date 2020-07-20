import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import Loading from './Loading'
import Error from './Error'

const Quote = () =>{

    const [peticion,setPeticion] = useState({
        loading :false,
        data:{
            quote: '',
            author:''
        },
        error:false
    }) 

    const getQuote = async () =>{
        setPeticion({
            ...peticion,
            loading:true
        })

        try {
            const Api = await Axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
            setPeticion({
                ...peticion,
                loading:false,
                data: Api.data[0]
            })
        } catch (error) {
            setPeticion({
                ...peticion,
                error: error
            })            
        }
    }

    useEffect( () =>{
        getQuote()
    }, [])

    if(peticion.loading){
        return (<Loading />)
    }

    if(peticion.error){
        return <Error error={peticion.error.message} />
    }


    return(

        <div className="container">
            <div className="Quote__container">
                <h3 className="Quote__quote"><span>“</span>{peticion.data.quote}<span>”</span></h3>
                <p className="Quote__author">- {peticion.data.author}</p>
            </div>
            <br/>
            <button className="btn btn-primary" onClick={getQuote}>Get Quote</button>
        </div>
    )
}

export default Quote