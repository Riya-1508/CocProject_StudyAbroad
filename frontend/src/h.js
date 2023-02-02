import React from "react"
import './h.css';


const h = [{
    _id: {
        $oid: "63da75162da3c91433bec325"
    },
    heading: "University of Oxford Scholarships for Bachelor Programs",
    Scholarship_Name: ["Palgrave Brown Scholarship", "Reach Oxford Scholarship", "Simon and June Li Undergraduate Scholarship", "D.H. Chen Foundation Scholarships"],
    Benefits: ["Covers living cost", "Covers course fee, living cost, and\r\n\t\t\tone return airfare per year", "Covers course fee and living cost", "Covers course fee and living cost"]
}]

export default function G() {
    return (
        <>
            <h1>Hello</h1>
            <p>
                {h[0]._id.$oid}
            </p>
            <p>
                {h[0].heading}
            </p>
            <br></br>
            <div>
                {h[0].Scholarship_Name.map((list) => {
                    return (
                        <>
                            <p className="space-x-3">{list}</p>
                        </>
                    )
                })}
                {h[0].Benefits.map((list) => {
                    return (
                        <>
                            <p className="space-x-3">{list}</p>
                        </>
                    )
                })}
            </div>
            <br></br>
            <div>

            </div>

            <div class="relative overflow-x-auto">
                <table class=" table w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Scholarship Names
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Benfits
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white table-cell border-b dark:bg-gray-800 dark:border-gray-700">
                        {h[0].Scholarship_Name.map((list) => {
                                return (
                                    <>
                                        <th scope="col" class="block px-6 py-3">
                                            {list}</th>
                                    </>
                                )
                            })}
                        </tr>
                        <tr class="bg-white table-cell border-b dark:bg-gray-800 dark:border-gray-700">
                            {h[0].Benefits.map((list) => {
                                return (
                                    <>
                                        <th scope="col" class="block px-6 py-3">
                                            {list}</th>
                                    </>
                                )
                            })}                           
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    );
}



