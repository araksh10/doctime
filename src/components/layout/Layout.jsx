import React from 'react';
import {gql} from "@apollo/client";
import {useQuery} from "@apollo/client/react/compiled";

const GET_DOCTOR = gql `
    query doctor (id){
        doctor (id: "6919ced58208f509ae5fbf3a") {
            id
            name
            degree
            bmdc_reg
        }
    }
`

const Layout = () => {
    return (
        <div>
            {/*Header Part*/}
            <div className="px-10 pt-5 pb-2 bg-blue-200">
                <h2 className="font-bold">Dr. Jannatul Nayeem</h2>
                <p>MBBS</p>
                <p>BMDC Reg No - <span>76655</span></p>
            </div>

            {/*Bar part*/}
            <hr/>
            <div className="flex flex-col md:flex-row justify-around m-2">
                <section>
                    <span className="font-bold mr-2">Patients Name:</span><span>Probal Dutta Turza</span>
                </section>
                <section>
                    <span className="font-bold mr-2">Gender:</span><span>Male</span>
                </section>
                <section>
                    <span className="font-bold mr-2">Age:</span><span>26y 1m 30d</span>
                </section>
                <section>
                    <span className="font-bold mr-2">Weight:</span><span>78 kg</span>
                </section>
            </div>
            <hr/>

            {/*body part*/}
            <div className="flex flex-col md:flex-row p-2 md:p-10">
                {/*left side*/}
                 <div className="flex-1 m-2 p-2">
                    {/*chief complaints section*/}
                    <div className="m-2">
                        <h2 className="font-bold">Chief Complaints:</h2>

                        <ul className="list-disc pl-5">
                            <li>Fever</li>
                            <li>Runny nose</li>
                            <li>Cough</li>
                        </ul>
                    </div>
                    <hr/>
                    {/*diagnosis section*/}
                    <div className="m-2">
                        <h2 className="font-bold">Diagnosis:</h2>

                        <ul className="list-disc pl-5">
                            <li>Fever under evaluation</li>
                            <li>Cough and cold</li>
                        </ul>
                    </div>
                    <hr/>
                    {/*investigation section*/}
                    <div className="m-2">
                        <h2 className="font-bold">Investigation:</h2>

                        <ul className="list-disc pl-5">
                            <li>CBC</li>
                            <li>Dengue NSI Ag</li>
                            <li>Dengue Antibiotics (IgG & IgM) (ICT)</li>
                        </ul>
                    </div>
                </div>
                <hr/>

                {/*right side*/}
                <div className="flex-2 m-2">
                    {/*prescription part*/}
                    <div className="m-2">
                        <h2 className="font-semibold text-3xl italic">Rx</h2>

                        <ol className="list-decimal pl-10 marker:font-bold">
                            <li>
                                <p>Tab. Napa 500 mg (Paracetamol)</p>
                                <p>
                                    <span className="mr-10">1+1+1+1</span>
                                    <span>7 days</span>
                                </p>
                                <hr className="border-gray-300 m-2" />
                            </li>
                            <li>

                                <p>Tab. Monas 10 mg (Montelukast Sodium)</p>
                                <p>
                                    <span className="mr-10">1+1+1+1</span>
                                    <span>7 days</span>
                                </p>
                                <hr className="border-gray-300 m-2" />
                            </li>
                            <li>

                                <p>Tab. Bilastin 20 mg (Bilastine)</p>
                                <p>
                                    <span className="mr-10">1+1+1+1</span>
                                    <span>7 days</span>
                                </p>
                                <hr className="border-gray-300 m-2" />
                            </li>
                        </ol>
                    </div>

                    {/*follow-up part*/}
                    <div className="pl-5">
                        <h2 className="font-bold">Follow-up within: <span className="font-normal">3 Days</span></h2>
                    </div>

                    {/*advice part*/}
                    <div className="pl-5 m-2">
                        <h2 className="font-bold">Advice:</h2>

                        <ul className="list-decimal pl-5">
                            <li>some advices in Bengali</li>
                            <li>some advices in Bengali</li>
                            <li>some advices in Bengali</li>
                        </ul>
                    </div>

                {/*Signature part*/}
                <div className="pl-5 mt-10 m-2">
                    <img src="" alt=""/>
                    <h4 className="font-bold">Dr. Jannatul Nayem</h4>
                    <p>MBBS</p>
                </div>


                </div>
            </div>

        {/*    Footer part*/}
            <hr/>
            <div className="p-2 md:p-10">
                <p>Doctime Description ...</p>
                <p className="font-bold">
                    Powered by Doctime Limited
                </p>
            </div>
        </div>
    )
}
export default Layout;
