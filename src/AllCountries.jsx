import { useState } from 'react'

export default function AllCountries({allCountries, addToList}) {
    const countries = allCountries?.map((c, idx) => {
        return (
        <div key={idx}>
            <h2>
                {c.name.common}
            </h2>
            <button onClick={() => addToList(c)}>Add To My List</button>
        </div>
        )
    })
    return <div>{countries}</ div>
}