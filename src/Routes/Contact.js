const Contact =()=>{
    return(<>
    <div className="bg-emerald-500 w-100 h-9 text-xl mt-2 mb-2 ">
            <h1>Help & Support
Let's take a step ahead and help you better.</h1>
        </div>

        <div className="flex flex-row w-full">
            <ul className="p-5 top-20 bg-gray-500 w-3/2 h-80 flex flex-col justify-evenly  mr-4">
                <li className=" text-base  text-white font-medium px-20 py-25  cursor-pointer flex relative ">Help with orders</li>
                <li className=" text-base  text-white font-medium px-20 py-25  cursor-pointer flex relative mt-2 mb-2 ">General issues</li>
                <li className=" text-base  text-white font-medium px-20 py-25  cursor-pointer flex relative mt-2 mb-2 ">Partner Onboarding</li>
                <li className="text-base  text-white font-medium px-20 py-25  cursor-pointer flex relative mt-2 mb-2 ">Legal, Terms & Conditions</li>
                <li className="text-base  text-white font-medium px-20 py-25  cursor-pointer flex relative mt-2 mb-2 ">Swiggy FAQs</li>

            </ul>
            <div className="w-1/2 bg-gray-400  ">
                <h1>Swiggy One FAQs</h1>
                <ul className=" p-3 flex flex-col justify-evenly">
                    <li>Is there a limit on the number of devices I can use Swiggy One on?</li>
                    <li>Are Swiggy One benefits available at all restaurants?</li>
                    <li>Is there a minimum order value to avail Swiggy One Flat ₹150 Off coupons on Dineout?</li>
                    <li>Is there a limit on free deliveries or extra discounts?</li>
                    <li>Is extra discount applicable on item total?</li>
                </ul>
            </div>
        </div>
    </>
        
    )
}

export default Contact