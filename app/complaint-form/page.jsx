import React from "react";


export default function complaintForm () {
    return (
        <section className="m-6">
            <div className="bg-[#fef3c7] text-center p-6">
                <h1 className="text-2xl mb-4">COMPLAINT FORM</h1>
                <p>Please fill out the folloing form with your <br /> complaint. We will review your request and follow <br />up with you as soon as possible.</p>
            </div>
            <div className="my-4">
                <div className="flex flex-cols gap-8">
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-900 ">First Name</p>
                        <input type="text" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block p-2.5"  placeholder="First Name" required></input>
                     </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-900 ">Last  Name</p>
                        <input type="text"className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block p-2.5"  placeholder="Last Name" required></input>
                    </div>
                </div>
                <p className="mb-2 text-sm font-medium text-gray-900 ">Email Address</p>
                <input type="email"className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block w-full p-2.5"  placeholder="Email Address" required></input>
                <p className="mb-2 text-sm font-medium text-gray-900 ">Phone Number</p>
                <input type="Number" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block w-full p-2.5"  placeholder="0801-234-5678" required></input>
                <p className="mb-2 text-sm font-medium text-gray-900 ">Reason for Complaint</p>
                <input type="text"className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block w-full p-2.5"  placeholder="Provide Information" required></input>
                <p className="mb-2 text-sm font-medium text-gray-900 ">Pease provide other details</p>
                <input type="text"className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block w-full p-2.5"  placeholder="Provide Infomation" required></input>
            </div>
        </section>
    );
}