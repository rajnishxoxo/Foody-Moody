const Contact =()=>{
    return(<>
    <div className="bg-emerald-500 w-100 h-9 text-xl mt-2 mb-2 ">
            <h1>Help & Support
Let's take a step ahead and help you better.</h1>
        </div>

        <div>
            <ul className="p-5 top-20 bg-gray-500 w-72 h-80 flex flex-col justify-evenly">
                <li className=" text-base  text-white font-medium px-20 py-25  cursor-pointer flex relative ">Help with orders</li>
                <li className=" text-base  text-white font-medium px-20 py-25  cursor-pointer flex relative mt-2 mb-2 ">General issues</li>
                <li className=" text-base  text-white font-medium px-20 py-25  cursor-pointer flex relative mt-2 mb-2 ">Partner Onboarding</li>
                <li className="text-base  text-white font-medium px-20 py-25  cursor-pointer flex relative mt-2 mb-2 ">Legal, Terms & Conditions</li>
                <li className="text-base  text-white font-medium px-20 py-25  cursor-pointer flex relative mt-2 mb-2 ">Swiggy FAQs</li>

            </ul>
        </div>
    </>
        
    )
}

export default Contact