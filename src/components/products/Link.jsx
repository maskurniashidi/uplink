import React, { useState, useEffect } from 'react';
import axios from 'axios';

import env from '../../environment';
import style from "./style/Product.module.css";

const LinkPage = ({profile}) => {
    const [datas, setDatas] = useState(null);

    if (datas == null) {
        axios.post(`${env.baseUrl}/api/category/`, {
            with: 'links',
            user_id: profile.id
        })
        .then(response => {
            let res = response.data;
            console.log(res);
            setDatas(res.data);
        })
    }

    return (
        <React.Fragment>
            {
                datas == null ?
                <div>Loading...</div>
                :
                <div style={{paddingTop: 10}}>
                    {
                        datas.categories.map(category => (
                            <div>
                                {
                                    category.links.length != 0 &&
                                    <div style={{marginTop: 20}}>
                                        <h2>{category.name}</h2>
                                        <div style={{backgroundColor: '#fff',borderRadius: 6,borderColor: '#ddd',borderWidth: 1,padding: 20,boxShadow: '1px 1px 10px 1px #ddd',marginTop: 15}}>
                                            {
                                                category.links.map(link => (
                                                    <div style={{borderBottomColor: '#ddd',borderBottomWidth: 1,marginBottom: 20,paddingBottom: 20,borderBottomStyle: 'solid'}}>
                                                        <a href={link.url} style={{color: '#444',textDecoration: 'none'}} target={'_blank'}>
                                                            <h3>{link.title}</h3>
                                                            <div style={{fontSize: 10,color: '#999',marginTop: 5}}>{link.url}</div>
                                                            <p style={{color: '#444',marginTop: 15,fontSize: 12}}>{link.description}</p>
                                                        </a>
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
        </React.Fragment>
    )
}

export default LinkPage;