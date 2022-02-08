import React, { useState } from 'react';
import axios from 'axios';

import env from '../../environment';

const DigitalProduct = ({profile}) => {
    const [datas, setDatas] = useState(null);

    if (datas == null) {
        axios.post(`${env.baseUrl}/api/category/`, {
            with: 'digital_products.images',
            user_id: profile.id
        })
        .then(response => {
            let res = response.data;
            setDatas(res.data);
        });
    }

    const toIdr = angka => {
        var rupiah = '';		
        var angkarev = angka.toString().split('').reverse().join('');
        for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
        return 'Rp '+rupiah.split('',rupiah.length-1).reverse().join('');
    }
    const limitWords = (word, limit) => {
        let ret = "";
        let w = word.split(" ");
        let lim = w.length > limit ? limit : w.length;
        for (let i = 0; i < lim; i++) {
            if (i != 0) {
                ret += " " + w[i];
            } else {
                ret += w[i];
            }
        }
        return ret;
    }

    return (
        <div>
            {
                datas == null ? 
                <div>Loading...</div>
                :
                <div style={{paddingTop: 10}}>
                    {
                        datas.categories.map(category => (
                            <div>
                                {
                                    category.digital_products.length != 0 &&
                                    <div>
                                        <h2>{category.name}</h2>
                                        <div style={{backgroundColor: '#fff',borderRadius: 6,borderColor: '#ddd',borderWidth: 1,padding: 20,boxShadow: '1px 1px 10px 1px #ddd',marginTop: 15}}>
                                            {
                                                category.digital_products.map(product => (
                                                    <div style={{borderBottomColor: '#ddd',borderBottomWidth: 1,flexDirection: 'row',flexWrap: 'wrap'}}>
                                                        <div style={{width: '40%',display: 'inline-block',verticalAlign: 'top'}}>
                                                            <img src={env.baseUrl + '/storage/digital_product_images/' + product.images[0].filename} style={{height: 120,width: '100%'}} />
                                                        </div>
                                                        <div style={{width: '60%',display: 'inline-block',verticalAlign: 'top',paddingLeft: 10}}>
                                                            <h3 style={{margin: 0}}>{product.name}</h3>
                                                            <p style={{color: '#444',marginTop: 10,fontSize: 10}}>{limitWords(product.description, 15)}...</p>
                                                            <div style={{color: '#D21515',fontWeight: 'bold',fontSize: 12,marginTop: 10,display: 'inline-block',width: '50%'}}>{toIdr(product.price)}</div>
                                                            <div style={{display: 'inline-block',width: '50%',marginTop: 10}}>
                                                                <button style={{backgroundColor: '#02a9f1',color: '#fff',borderRadius: 5,borderWidth: 0,width: '100%',height: 30}}>Add</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                }
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default DigitalProduct;