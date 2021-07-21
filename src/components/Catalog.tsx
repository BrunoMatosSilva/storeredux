import { useEffect } from 'react';
import { useState } from 'react';
import api from '../services/api';
import { IProduct } from '../store/modules/cart/types';

export function Catalog() {
    const [catalog, setCatalog] = useState<IProduct[]>([]);

    useEffect(() => {
        api.get('products').then(response => {
            setCatalog(response.data);
        })
    }, [])

    return (
        <div>
            <h1>Catalog</h1>

            {catalog.map(product => (
                <article key={product.id}>
                    <strong>{product.title}</strong> {" - "}
                    <span>{product.price}</span> {" "}

                    <button type="button">Comprar</button>
                </article>


            ))}
        </div>
    )
}

export default Catalog;