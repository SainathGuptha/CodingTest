import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Team = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098')
            .then(response => {
                setData(response.data);
            })
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <>
            <nav className="bg-blue-400 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white font-semibold text-lg">Team</div>
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-white text-white rounded-l-full rounded-r-full px-6 py-1 "
                        />
                    </div>
                </div>
            </nav>

            <div className=' m-4'>
                <h1 className='flex ml-2 text-2xl'>Administrators</h1>
                <div className="flex flex-wrap w-full m-4 border-b  pb-4" >
                    {data.filter(person => person.role === 'admin').map((admin, index) => (
                        <div className="bg-white rounded-lg shadow-md m-3 p-3 w-1/5" key={index} >
                            <div className="flex items-center">
                                <img
                                    src={admin.img} alt={`${admin.first_name} ${admin.last_name}`}
                                    className="w-10 h-10 rounded-full mr-3"
                                />
                                <div>
                                    <h2 className="font-semibold text-gray-800 text-sm">
                                        {`${admin.first_name} ${admin.last_name}`}
                                    </h2>
                                    <p className="text-gray-600 text-xs">{admin.email}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='pt-4'>
                    <h2 className='flex ml-2 text-2xl'>Members</h2>
                    <div className="flex flex-wrap w-full m-4" >
                        {data.filter(person => person.role === 'member').map((member, index) => (
                            <div className="bg-white rounded-lg shadow-md m-3 p-3 w-1/5" key={index} >
                                <div className="flex ">
                                    <img
                                        src={member.img} alt={`${member.first_name} ${member.last_name}`}
                                        className="w-10 h-10 rounded-full mr-3"
                                    />
                                    <div>
                                        <h2 className="font-semibold text-gray-800 text-sm">
                                            {`${member.first_name} ${member.last_name}`}
                                        </h2>
                                        <p className="text-gray-600 text-xs">{member.email}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team;


